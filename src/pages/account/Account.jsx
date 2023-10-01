import { useEffect, useMemo, useState } from "react";
import ButtonComponent from "../../component/ButtonComponent";
import TableComponent from "../../component/TableComponent";
import ModalComponent from "../../component/ModalComponent";
import ACCOUNT from "../../constants/Account";
import swal from "sweetalert";

function Account() {
  const [modal, setModal] = useState(false);
  const [accountDetail, setAccountDetail] = useState({});
  const [accounts, setAccounts] = useState(ACCOUNT);
  const [mode, setMode] = useState("create");

  const onCreate = () => {
    setModal(!modal);
    setMode("create");
    setAccountDetail({
      id: "",
      email: "",
      userName: "",
      fullName: "",
      position: "",
      department: "",
      createDate: "",
    });
  };
  const onCloseModal = () => {
    setModal(!modal);
  };
  const onEdit = (account) => {
    setModal(!modal);
    setMode("edit");
    setAccountDetail(account);
  };

  const handleSave = (formData) => {
    let newAccount = [...accounts];
    if (mode === "create") {
      newAccount.push(formData);
    } else {
      newAccount = accounts.map((item) => {
        if (item.id === formData.id) {
          return formData;
        }
        return item;
      });
    }
    // console.log(
    //   mode === "create" ? "Them moi thanh cong" : "Cap nhat thanh cong"
    // );
    setModal(!modal);
    setAccounts(newAccount);
  };

  const handleDelete = (accountDel) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const newAccount = accounts.filter(
          (account) => +account.id !== +accountDel.id
        );
        setAccounts(newAccount);
        swal(`delete ${accountDel.id} `, {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div className="container pt-5">
      <ButtonComponent
        clickButton={onCreate}
        color="info"
        name="create new account"
      />
      <h1>Danh sách account</h1>
      <TableComponent
        handleEditClickToParent={onEdit}
        handleDeleteClickToParent={handleDelete}
        accounts={accounts}
      />
      <ModalComponent
        isOpen={modal}
        mode={mode}
        close={onCloseModal}
        toggle={onCreate}
        accountDetail={accountDetail}
        handleSave={handleSave}
      />
      {/* <MyModal
        isOpen={modal}
        mode={mode}
        close={onCloseModal}
        toggle={onCreate}
        accountDetail={accountDetail}
        handleSave={handleSave}
      /> */}
    </div>
  );
}
export default Account;
