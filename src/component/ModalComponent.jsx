import {
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import ButtonComponent from "./ButtonComponent";
import React, { useEffect, useState } from "react";
import InputFiled from "./InputFiled";
import SelectComponent from "./SelectComponent";
import POSITION from "../constants/Position";
import DEPARTMENT from "../constants/department";

function ModalComponent(props) {
  const { modal, toggle, close, mode, accountDetail, handleSave } = props;

  const [formData, setFormData] = useState({
    id: "",
    email: "",
    userName: "",
    fullName: "",
    position: "",
    department: "",
    createDate: new Date(),
  });

  useEffect(() => {
    setFormData(accountDetail);
  }, [accountDetail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader toggle={toggle}>
          {mode === "create" ? "Them moi account" : "Cap nhat account"}
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <InputFiled
              id="id"
              label="ID"
              placeholder="ID Input"
              value={formData.id}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <InputFiled
              id="email"
              label="email"
              placeholder="ID Input"
              value={formData.email}
              type="mail"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <InputFiled
              id="userName"
              label="userName"
              placeholder="ID Input"
              value={formData.userName}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <InputFiled
              id="fullName"
              label="fullName"
              placeholder="ID Input"
              value={formData.fullName}
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <SelectComponent
            id="position"
            label="Position"
            value={formData.position}
            type="select"
            onChange={handleChange}
            listOption={POSITION}
          />
          <FormGroup>
            <SelectComponent
              id="department"
              value={formData.department}
              type="select"
              onChange={handleChange}
              label="Department"
              listOption={DEPARTMENT}
            />
          </FormGroup>
          <FormGroup>
            <Label for="createDate">createDate</Label>
            <Input
              name="createDate"
              id="createDate"
              value={formData.createDate}
              placeholder="input createDate"
              type="Date"
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <ButtonComponent
            clickButton={() => handleSave(formData)}
            color="primary"
            name={mode}
          />
          <ButtonComponent color="primary" name="close" clickButton={close} />
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModalComponent;
