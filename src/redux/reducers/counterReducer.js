import {DEC, INC, RESET, INCCUSTOM} from "../create-types";


const initialState = {
    counter: {
        value: 0
    }
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INC :
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            }

        case INCCUSTOM :
            console.log(action.payload)
            return {
                ...state,
                counter: {
                    value: state.counter.value + +(action.payload)
                }
            }

        case DEC :
            return {
                ...state,
                counter: {
                    value: state.counter.value - 1
                }
            }

        case RESET :
            return {
                ...state,
                counter: {
                    value: 0
                }
            }


        default :
            return state
    }
}

export {
    counterReducer
}
