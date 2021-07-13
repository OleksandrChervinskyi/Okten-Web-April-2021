import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        isLoading: false
    },
    reducers: {
        addTodosToStore(state, actions) {
            state.todos = actions.payload
        },
        pushNewTodoToStore(state, actions) {
            state.todos.push(actions.payload)
        },
        deleteTodoFromStore(state, actions) {
           state.todos =  state.todos.filter(el => el.id !== actions.payload)
        },
        isLoadingTrue(state) {
            state.isLoading = true
        },
        isLoadingFalse(state) {
            state.isLoading = false
        }
    }
})
export const {
    addTodosToStore,
    pushNewTodoToStore,
    isLoadingTrue,
    isLoadingFalse,
    deleteTodoFromStore
} = todosSlice.actions

// get all Todos
export const fetchTodos = (e) => async dispatch => {
    try {
        const resp = await fetch('http://localhost:8888/get-todos')
        const data = await resp.json()

        dispatch(addTodosToStore(data))
    } catch {
        console.log(e)
    }
}

// create new todos
export const createNewTodo = (title, description) => async dispatch => {
    try {
        dispatch(isLoadingTrue())
        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        dispatch(pushNewTodoToStore(data))

    } catch (e) {
        console.log(e)
    } finally {
        dispatch(isLoadingFalse())
    }
}

// remove all Todos
export const removeTodo = (id) => async dispatch => {

    try {
        const resp = await fetch('http://localhost:8888/delete-todo/' + id, {
            method: 'DELETE'
        })

        dispatch(deleteTodoFromStore(id))
    } catch {
        console.log('Not delete')
    }
}

export default todosSlice.reducer