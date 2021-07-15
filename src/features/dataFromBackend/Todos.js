import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchTodos, removeTodo, updateTodo} from "./todosSlice";
import {EditForm} from "../forms/EditForm";

export const Todos = () => {
    const todos = useSelector(({endpoints: {todos}}) => todos)
    const dispatch = useDispatch()

    const [editTougle, setEditTougle] = useState(false)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    const openEditForm = () => {
        setEditTougle(!editTougle)

    }

    return (
        <div>
            {!todos.length && <h4>Is loading...</h4>}
            {todos.map(todo => <li key={todo.id}>

                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <span>Create at : {todo.createdAt}</span>
                <p>Status : {todo.completed.toString()}</p>
                <p>Updated at: {todo.updatedAt}</p>

                {editTougle && <EditForm/>}


                <button onClick={() => dispatch(removeTodo(todo.id))}> Delete todo</button>
                {!editTougle && <button onClick={() => openEditForm()}> Edit</button>}


            </li>)}
        </div>
    )
}