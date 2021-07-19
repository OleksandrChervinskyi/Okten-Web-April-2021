import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../servises/jsonPlaceHolder";
import {getPostsAction} from "../../redux/create-action";

export const Posts = () => {
    const {posts} = useSelector(({jsonReducer: {bigData}}) => bigData)
    const dispatch = useDispatch()

    const showPosts = () => {
        if (!posts.length) {
            getPosts().then(value => dispatch(getPostsAction(value.data)))
            console.log('get Posts from https://jsonplaceholder.typicode.com/')
        }else {
            console.log('get posts from redux store')
        }
    }

    useEffect(() => {
        showPosts()
    }, [])


    return (
        <>
            {(!posts.length || !posts) && <p>Loading ...</p>}
            {posts.map(post => <li key={post.id}><h3>{post.title}</h3><p>{post.body}</p></li>)}
        </>
    )
}