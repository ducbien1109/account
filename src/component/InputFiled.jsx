import { FormGroup, Input, Label } from "reactstrap";

function InputFiled(props) {
  const {id,label,value,placeholder,type,onChange} = props

  

  return (
    <>
      <FormGroup>
        <Label for={id}>{label}</Label>
        <Input
          id={id}
          value={value}
          name={id}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
      </FormGroup>
    </>
  );
}
export default InputFiled;
