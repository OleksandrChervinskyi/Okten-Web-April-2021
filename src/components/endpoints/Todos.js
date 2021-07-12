import { useEffect, useState } from 'react'
import { getTodos } from '../services/AllServices'

export const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos().then(value => setTodos(value.data))

    }, [])

    return (
        <>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title} - {todo.completed.toString()}
                    <br />
                    <hr />
                </li>
            ))}
        </>
    )
}