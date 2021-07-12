import { useEffect, useState } from 'react'
import { getComments } from '../services/AllServices'

export const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(value => setComments(value.data))

    }, [])

    return (
        <>
            {comments.map(comment => (
                <li key={comment.id}>
                    {comment.email} - {comment.body}
                    <br />
                    <br />
                </li>
            ))}
        </>
    )
}