import {useEffect, useState} from "react";

export const TodosList = () => {

    const [todos, setTodos] = useState([])

    const getTodosFromBackend =  async () => {
        const resp = await fetch('http://localhost:8888/get-todos')
        const data = await resp.json()
        setTodos(data)
    }

    useEffect(()=> {
        getTodosFromBackend()
    }, [])

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>
                <h4>{todo.title}</h4>
                <p>{todo.description}</p>
                <span>Created at : {todo.createdAt.toString()}</span>
            </div>)}
        </div>
    )
}