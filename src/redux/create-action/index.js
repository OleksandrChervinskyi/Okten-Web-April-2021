import {
    DEC,
    GETALBUMS,
    GETCOMMENTS,
    GETPHOTOS,
    GETPOSTS,
    GETTODOS,
    GETUSERS,
    INC,
    INCCUSTOM,
    RESET
} from "../create-types";

const incCounter = () => ({type : INC})
const incCustomCounter = (payload) => ({type : INCCUSTOM , payload})
const decCounter = () => ({type : DEC})
const resetCounter = () => ({type : RESET})


const getPostsAction = (payload)=> ({type : GETPOSTS, payload})
const getAlbumsAction = (payload)=> ({type : GETALBUMS, payload})
const getPhotosAction = (payload)=> ({type : GETPHOTOS, payload})
const getCommentsAction = (payload)=> ({type : GETCOMMENTS, payload})
const getUsersAction = (payload)=> ({type : GETUSERS, payload})
const getTodosAction = (payload)=> ({type : GETTODOS, payload})

export {
    incCounter,
    incCustomCounter,
    decCounter,
    resetCounter,
    getPostsAction,
    getAlbumsAction,
    getPhotosAction,
    getCommentsAction,
    getUsersAction,
    getTodosAction,
}