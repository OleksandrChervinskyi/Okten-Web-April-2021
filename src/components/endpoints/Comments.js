import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../servises/jsonPlaceHolder";
import {getCommentsAction} from "../../redux/create-action";

export const Comments = () => {
    const {comments} = useSelector(({jsonReducer: {bigData}}) => bigData)
    const dispatch = useDispatch()

    const showComments = () => {
        if (!comments.length) {
            getComments().then(value => dispatch(getCommentsAction(value.data)))
            console.log('get Comments from https://jsonplaceholder.typicode.com/')

        } else {
            console.log('get Comments from redux store')
        }
    }

    useEffect(() => {
        showComments()
    }, [])

    return (
        <>
            {(!comments.length || !comments) && <p>Loading ...</p>}
            {comments.map(comment => <li key={comment.id}><h3>{comment.id} - {comment.name}</h3><p>{comment.body}</p>
            </li>)}
        </>
    )
}