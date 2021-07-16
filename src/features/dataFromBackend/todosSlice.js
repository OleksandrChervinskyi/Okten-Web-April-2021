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
        unshiftNewTodoToStore(state, actions) {
            state.todos.unshift(actions.payload)
        },
        deleteTodoFromStore(state, actions) {
            state.todos = state.todos.filter(el => el.id !== actions.payload)
        },
        // updateTodoinStore(state, actions) {
        //     let outdatedTodo = state.todos.find(el => el.id = actions.payload.id)
        //     outdatedTodo = JSON.stringify(JSON.parse(actions.payload))
        // },
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
    unshiftNewTodoToStore,
    isLoadingTrue,
    isLoadingFalse,
    deleteTodoFromStore,

} = todosSlice.actions

// get all Todos
export const fetchTodos = (e) => async dispatch => {
    try {
        dispatch(isLoadingTrue())
        const resp = await fetch('http://localhost:8888/get-todos')
        const data = await resp.json()

        dispatch(addTodosToStore(data))
    } catch {
        console.log(e)
    } finally {
        dispatch(isLoadingFalse())
    }
}

// get one Todo
export const fetchOneTodo = (id) => async dispatch => {
    try {
        dispatch(isLoadingTrue())
        const resp = await fetch('http://localhost:8888/todo/' + id)
        const data = await resp.json()

        return data
        // dispatch(addOneTodoToSpecialStore(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(isLoadingFalse())
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
        dispatch(unshiftNewTodoToStore(data))

    } catch (e) {
        console.log(e)
    } finally {
        dispatch(isLoadingFalse())
    }
}

// update completed in todo
export const updateTodo = (newTodo) => async dispatch => {

    try {
        const resp = await fetch('http://localhost:8888/update-todo/' + newTodo.id, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: !newTodo.completed,
                title: newTodo.title,
                description: newTodo.description
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        const data = await resp.json()
        dispatch(deleteTodoFromStore(newTodo.id))
        dispatch(unshiftNewTodoToStore(data))
    } catch (e) {
        console.log('Sms wrong', e)
    }
}

// remove one Todo
export const removeTodo = (id) => async dispatch => {

    try {
        dispatch(isLoadingTrue())
        const resp = await fetch('http://localhost:8888/delete-todo/' + id, {
            method: 'DELETE'
        })

        dispatch(deleteTodoFromStore(id))
    } catch {
        console.log('Not delete')
    } finally {
        dispatch(isLoadingFalse())
    }
}

export default todosSlice.reducer