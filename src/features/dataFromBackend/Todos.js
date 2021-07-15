import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodos} from "./todosSlice";
import {Todo} from "./Todo";


export const Todos = () => {
    const {todos, isLoading} = useSelector(({endpoints}) => endpoints)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchTodos())
    }, [])


    return (
        <div>
            {isLoading && <h4>Is loading...</h4>}

            {todos.map(todo => <li className={'todo'} key={todo.id}>
                <Todo item={todo}/>
            </li>)}
        </div>
    )
}