import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodos} from "./todosSlice";
import {Todo} from "./Todo";


export const Todos = () => {
    const todos = useSelector(({endpoints: {todos}}) => todos)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <div>
            {!todos.length && <h4>Is loading...</h4>}

            {todos.map(todo => <li className={'todo'} key={todo.id}>
                <Todo item={todo}/>
            </li>)}
        </div>
    )
}