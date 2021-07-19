import axios from "axios";

const  options = {
    baseURL : 'https://jsonplaceholder.typicode.com/'
}

const axiosInstance = axios.create(options)

const getPosts = () => axiosInstance('posts')

const getComments = () => axiosInstance('comments')

const getAlbums = () => axiosInstance('albums')

const getPhotos = () => axiosInstance('photos')

const getTodos = () => axiosInstance('todos')

const getUsers = () => axiosInstance('users')



export {
    getPosts,
    getComments,
    getAlbums,
    getPhotos,
    getTodos,
    getUsers,

}