import {useDispatch, useSelector} from "react-redux";
import {addDescriptionFromFormToStore, addTitleFromFormToStore} from "./formSlice";
import {createNewTodo} from "../dataFromBackend/todosSlice";

export const Form = () => {

    const dispatch = useDispatch()
    const {title, description} = useSelector(({formDetails}) => formDetails)
    const isLoading = useSelector(({endpoints: {isLoading}}) => isLoading)

    const clickSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description || isLoading) return

        try {
            // Create and sent new todos to backend
            await dispatch(createNewTodo(title, description))

            // Delete text from forms
            dispatch(addTitleFromFormToStore(''))
            dispatch(addDescriptionFromFormToStore(''))
        } catch {
            console.error('Not created, catch used')
        }
    }

    return (
        <>
            <h2>Create new todo</h2>
            <form onSubmit={clickSubmit}>
                <input type={'text'} placeholder={'enter title'} value={title}
                       onChange={({target: {value}}) => dispatch(addTitleFromFormToStore(value))}/>
                <input type={'text'} placeholder={'enter description'} value={description}
                       onChange={({target: {value}}) => dispatch(addDescriptionFromFormToStore(value))}/>

                <button type={'submit'} disabled={!title || !description || isLoading}> Create new todo
                </button>

            </form>
            <hr/>
        </>
    )
}