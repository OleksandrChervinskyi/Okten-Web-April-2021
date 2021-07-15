import {TodoDetailsReturn} from "./TodoDetailsReturn";

export const TodoDetails = (props) => {

    const {item} = props.location.state



    return (
        <TodoDetailsReturn item={item}/>
    )
}