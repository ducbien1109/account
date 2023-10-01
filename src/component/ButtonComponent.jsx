import { Button } from "reactstrap"
function ButtonComponent(props){
    
    const {name, color,clickButton} = props
    return(
        <Button color={color} onClick={clickButton}>{name}</Button>
    )
}
export default ButtonComponent