import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodos} from "./todosSlice";
import {Todo} from "./Todo";
import {Form} from "../forms/Form";


export const Todos = () => {
    const {todos, isLoading} = useSelector(({endpoints}) => endpoints)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    return (
        <>
            <Form/>
            <div>
                {isLoading && <h4>Is loading...</h4>}
                {todos
                    .slice()
                    .sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
                    .map(todo => <li className={'todo'} key={todo.id}>
                        <Todo item={todo}/>
                    </li>)}
            </div>
        </>

    )
}