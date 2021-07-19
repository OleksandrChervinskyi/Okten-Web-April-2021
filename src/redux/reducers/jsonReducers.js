import {GETALBUMS, GETCOMMENTS, GETPHOTOS, GETPOSTS, GETTODOS, GETUSERS} from "../create-types";


const initalState = {
    bigData : {
        posts : [],
        comments : [],
        todos : [],
        albums : [],
        users : [],
        photos : [],
    }
}

const jsonReducer = (state = initalState, action) => {
    switch (action.type) {
        case GETPOSTS :
            return {
                bigData: {
                    ...state.bigData,
                    posts: action.payload
                }
            }

        case GETCOMMENTS :
            return {
                bigData: {
                    ...state.bigData,
                    comments: action.payload
                }
            }

        case GETTODOS :
            return {
                bigData: {
                    ...state.bigData,
                    todos: action.payload
                }
            }

        case GETUSERS :
            return {
                bigData: {
                    ...state.bigData,
                    users: action.payload
                }
            }

        case GETPHOTOS :
            return {
                bigData: {
                    ...state.bigData,
                    photos: action.payload
                }
            }

        case GETALBUMS :
            return {
                bigData: {
                    ...state.bigData,
                    albums: action.payload
                }
            }

        default :
            return state
    }
}

export {
    jsonReducer,
}
