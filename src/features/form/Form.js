import {useDispatch, useSelector} from "react-redux";
import {addDescriptionFromFormToStore, addTitleFromFormToStore} from "./formSlice";
import {createNewTodo} from "../dataFromBackend/todosSlice";

export const Form = () => {

    const dispatch = useDispatch()
    const {title, description, isLoading} = useSelector(({formDetails}) => formDetails)
    console.log(isLoading)
    const clickSubmit = (e) => {
        e.preventDefault()
        if (!title || !description) return


        dispatch(createNewTodo(title, description))
    }

    return (
        <>
            <form onSubmit={clickSubmit}>
                <input type={'text'} placeholder={'enter title'} value={title}
                       onChange={({target: {value}}) => dispatch(addTitleFromFormToStore(value))}/>
                <input type={'text'} placeholder={'enter description'} value={description}
                       onChange={({target: {value}}) => dispatch(addDescriptionFromFormToStore(value))}/>

                <button type={'submit'} disabled={!title || !description}> Create new todo
                </button>

            </form>
        </>
    )
}