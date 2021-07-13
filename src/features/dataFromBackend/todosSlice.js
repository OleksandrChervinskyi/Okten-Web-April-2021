import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodosToStore(state, actions) {
            state.todos = actions.payload
        },
        pushNewTodoToStore(state, actions) {
            state.todos.push(actions.payload)
        }
    }
})

export const {addTodosToStore, pushNewTodoToStore} = todosSlice.actions

export const fetchTodos = (e) => async dispatch => {
    try {
        const resp = await fetch('http://localhost:8888/get-todos')
        const data = await resp.json()

        dispatch(addTodosToStore(data))
    } catch {
        console.log(e)
    }
}

export const createNewTodo = (title, description) => async dispatch => {
    const resp = await fetch('http://localhost:8888/create-todo', {
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await resp.json()
}

export default todosSlice.reducer