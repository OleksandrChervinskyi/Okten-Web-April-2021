import axios from 'axios'

const options = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}


const axiosInstanse = axios.create(options)

const getUsers = () => axiosInstanse('users')
const getUser = (id) => axiosInstanse('users/' + id)
const getUsersPosts = (id) => axiosInstanse('users/' + id + '/posts')

const getPosts = () => axiosInstanse('posts')
const getPost = (id) => axiosInstanse('post/' + id)
const getPostsComments = (id) => axiosInstanse('posts/' + id + '/comments')

const getAlbums = () => axiosInstanse('albums')

const getComments = () => axiosInstanse('comments')

const getTodos = () => axiosInstanse('todos')

export {
    getUsers,
    getUser,
    getPosts,
    getPost,
    getUsersPosts,
    getPostsComments,
    getAlbums,
    getComments,
    getTodos,
}