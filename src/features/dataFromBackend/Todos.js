import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodos} from "./todosSlice";

export const Todos = () => {
    const todos = useSelector(({endpoints : {todos}}) => todos)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchTodos())
    },[])

    return(
        <div>
            {!todos.length && <h4>Is loading...</h4>}
            {todos.map(todo => <li key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <span>{todo.createdAt}</span>
            </li>)}
        </div>
    )
}