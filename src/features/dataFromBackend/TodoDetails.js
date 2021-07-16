import {TodoDetailsReturn} from "./TodoDetailsReturn";
import {useParams} from 'react-router';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchOneTodo} from "./todosSlice";

export const TodoDetails = (props) => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [todo, setTodo] = useState()


    const putOneTodo = async (id) => {
        if (!props.location.state) {

            // From server
            const todoFromServer =  await dispatch(fetchOneTodo(id))
            setTodo(todoFromServer)
            console.log('Todo from server');

        } else {

            // From location.state
            const {item} = props.location.state
            setTodo(item)
            console.log('Todo from location.state');
        }
    }

    useEffect(() => {
        putOneTodo(id)

    }, [])


    return (
        <TodoDetailsReturn item={todo}/>
    )
}