import React, { useState } from "react";
import { Table } from "antd";

const MyTable = ({ accounts }) => {
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Username",
      dataIndex: "userName",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div>
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        rowKey={"id"}
        columns={columns}
        dataSource={accounts}
      />
    </div>
  );
};

export default MyTable;
