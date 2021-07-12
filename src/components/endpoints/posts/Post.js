import { useState } from 'react'
import { getPostsComments } from '../../services/AllServices'

export const Post = ({ item }) => {

    const [comments, setComments] = useState([])
    const [commentsSwitch, setCommentsSwitch] = useState(false)

    const showPostsComments = (id) => {

        getPostsComments(id).then(value => setComments(value.data))

        setCommentsSwitch(!commentsSwitch)
    }

    return (
        <>
            <li>
                {item.title} - {item.id}

                <button onClick={() => {
                    showPostsComments(item.id)
                }}>Show comments</button>
            </li>

            {commentsSwitch && comments.map(comment => <p key={comment.id}>{comment.postId} - {comment.body}</p>)}
            <br />
        </>
    )
}