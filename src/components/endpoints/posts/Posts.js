import { useEffect, useState} from 'react'
import { getPosts } from '../../services/AllServices'
import { Post } from './Post'

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
       getPosts().then(value => setPosts(value.data))

    }, [])

    return (
        <>
        {posts.map(post => <Post key={post.id} item={post}/>)}
        </>
    )
}