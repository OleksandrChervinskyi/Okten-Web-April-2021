import { useState } from 'react';
import { Link } from 'react-router-dom'
import { getUsersPosts } from '../../services/AllServices';

export const User = ({ item }) => {
    const [posts, setPosts] = useState([])
    const [touglePosts, setTouglePosts] = useState(false)

    const showUsersPosts = (id) => {
       
        getUsersPosts(id).then(value => setPosts(value.data))
        setTouglePosts(!touglePosts)
    }



    return (
        <>
            <li>
                {item.name}

                {/* User`s posts */}
                <button onClick={() => {
                    showUsersPosts(item.id)
                }}>His posts</button>

                {/* Users detalies */}
                <Link to={{
                    pathname: '/users/' + item.id,
                    state: { item }
                }}>
                    User details
                </Link>

            </li>

            {touglePosts && posts.map(post => <p key={post.id}>{post.title} - {post.id}</p>)}
            <br />

        </>
    )
}

