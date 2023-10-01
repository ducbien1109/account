import { FormGroup, Input, Label } from "reactstrap";

function SelectComponent(props) {
  const { id, label, value, type, onChange, listOption } = props
  return (
      <FormGroup>
          <Label for={id}>
              {label}
          </Label>
          <Input
              id={id}
              name={id}
              type={type}
              value={value}
              onChange={onChange}
          >
              <option value="">Select {label}</option>
              {listOption.map((option) => {
                  return (
                       <option key={option.id} value={option.id}>{option.value}</option>
                  )
              })}
          </Input>
      </FormGroup>
  )
}
export default SelectComponent;
