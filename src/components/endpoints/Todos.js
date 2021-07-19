import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../../servises/jsonPlaceHolder";
import {getTodosAction} from "../../redux/create-action";

export const Todos = () => {
    const {todos} = useSelector(({jsonReducer: {bigData}}) => bigData)
    const dispatch = useDispatch()

    const showTodos = () => {
        if (!todos.length) {
            getTodos().then(value => dispatch(getTodosAction(value.data)))
            console.log('get Todos from https://jsonplaceholder.typicode.com/')
        } else {
            console.log('get Todos from redux store')
        }
    }

    useEffect(() => {
        showTodos()
    }, [])


    return (
        <>
            {(!todos.length || !todos) && <p>Loading ...</p>}
            {todos.map(todo => <li key={todo.id}><h3> {todo.id} - {todo.title}</h3><p>{todo.completed.toString()}</p>
            </li>)}
        </>
    )
}