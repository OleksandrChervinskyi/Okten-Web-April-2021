import {removeTodo, updateTodo} from "./todosSlice";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export const Todo = ({item}) => {
    const dispatch = useDispatch()

    const [editTougle, setEditTougle] = useState(false)
    const [inputTitleLocalValue, setInputTitleLocalValue] = useState('')
    const [inputDescriptionLocalValue, setInputDescriptionLocalValue] = useState('')
    const [selectValue, setSelectValue] = useState()

    const isLoading = useSelector(({endpoints: {isLoading}}) => isLoading)

    // Off/on button 'edit'
    const openEditForm = () => {
        setEditTougle(!editTougle)
    }

    const saveAndSentNewDataToServer = (id, title, description, selected) => {
        if (!id || !title || !description || !selected){
            console.log('Some field is empty')
            setEditTougle(false)
            return
        }



        const newDataForUpdateTodo = {
            'id': id,
            'title': title,
            'description': description,
            'completed': selected
        }

        // Sent/update to server
        dispatch(updateTodo(newDataForUpdateTodo))

        //  Clean inputs
        setInputTitleLocalValue('')
        setInputDescriptionLocalValue('')

        // Off edit view
        setEditTougle(false)
    }

    return (
        <>
            {/*Id*/}
            <h5>{item.id}</h5>

            {/*Title*/}
            {(!editTougle && <h2>{item.title}</h2>)
            ||
            (editTougle && <h2><input type="text" value={inputTitleLocalValue}
                                      onChange={({target: {value}}) => setInputTitleLocalValue(value)}
                                      placeholder={item.title}/></h2>)}

            {/*Description*/}
            {(!editTougle && <p>{item.description}</p>)
            ||
            (editTougle && <p><input type="text" value={inputDescriptionLocalValue}
                                     onChange={({target: {value}}) => setInputDescriptionLocalValue(value)}
                                     placeholder={item.description}/></p>)}

            {/*Create*/}
            <span>Create at : {item.createdAt}</span>

            {/*Status*/}
            {(!editTougle && <p>Status : {item.completed.toString()}</p>)
            ||
            (editTougle &&
                <p>
                    Status :
                    <select value={selectValue} onChange={({target: {value}}) =>
                        setSelectValue(value)
                    }>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                     * - must to choose
                </p>)}

            {/*Update*/}
            <p>Updated at: {item.updatedAt}</p>


            {/*Delete button*/}
            <button onClick={() => dispatch(removeTodo(item.id))} disabled={isLoading}> Delete todo</button>
            {!editTougle && <button onClick={() => openEditForm()}> Edit</button>}

            {/*Save button*/}
            {editTougle && <button
                onClick={() => saveAndSentNewDataToServer(item.id, inputTitleLocalValue, inputDescriptionLocalValue, selectValue)}>
                Save
            </button>}
            <hr/>

        </>
    )
}