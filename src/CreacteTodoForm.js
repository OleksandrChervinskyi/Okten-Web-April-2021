import {useState} from "react";

export const CreacteTodoForm  = ({onSubmit}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description || isLoading) return

        try {
            setisLoading(true)
            await onSubmit(title, description)
            setisLoading(false)

            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        }finally {
            setisLoading(false)
        }

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type={'text'} placeholder={'enter title'} value={title}
                   onChange={({target: {value}}) => setTitle(value)}/>
            <input type={'text'} placeholder={'enter description'} value={description}
                   onChange={({target: {value}}) => setDescription(value)}/>

            <button type={'submit'} disabled={!title || !description || isLoading}>
                Create todos
            </button>
        </form>
    )
}