import { Table } from "reactstrap";
import ButtonComponent from "./ButtonComponent";
import { useMemo, useState } from "react";
import Pagination from "./Pagination";
import DEPARTMENT from "../constants/department";
import POSITION from "../constants/Position";

function TableComponent(props) {
  const styleData = {
    color: "red",
  };
  let PageSize = 10;
  const { handleEditClickToParent, handleDeleteClickToParent, accounts } =
    props;

  console.log("props la:::", props);
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return accounts.slice(firstPageIndex, lastPageIndex);
  }, [accounts, currentPage]);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>userName</th>
            <th>fullName</th>
            <th> position </th>
            <th>department</th>
            <th>createDate</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((account) => {
            return (
              <tr key={account.id}>
                <th>{account.id}</th>
                <td>{account.email}</td>
                <td>{account.userName}</td>
                <td>{account.fullName}</td>
                <td>
                  {
                    DEPARTMENT.filter(
                      (department) => +department.id === +account.department
                    )[0]?.value
                  }
                </td>
                <td>
                  {
                    POSITION.filter(
                      (position) => +position.id === +account.position
                    )[0]?.value
                  }
                </td>
                <td>{account.createDate}</td>
                <td>
                  <ButtonComponent
                    name="edit"
                    color="info"
                    clickButton={() => {
                      handleEditClickToParent(account); // => onEdit(account)
                    }}
                  />
                </td>
                <th>
                  <ButtonComponent
                    name="delete"
                    color="info"
                    clickButton={() => {
                      handleDeleteClickToParent(account);
                    }}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={accounts.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
export default TableComponent;
