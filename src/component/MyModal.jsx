import { Form, Input, Modal } from "antd";
import React from "react";

const MyModal = ({ isOpen, close }) => {
  const handleOk = () => {
    console.log("ok ok ");
  };
  return (
    <div>
      <Modal title="Basic Modal" open={isOpen} onOk={handleOk} onCancel={close}>
        <Form>
          <Form.Item label="User name" name="username">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MyModal;
