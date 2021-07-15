import {createSlice} from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        title: '',
        description: ''
    },
    reducers: {
        addTitleFromFormToStore(state, action) {
            state.title = action.payload
        },
        addDescriptionFromFormToStore(state, action) {
            state.description = action.payload
        }
    }
})

export const {
    addTitleFromFormToStore, addDescriptionFromFormToStore
} = formSlice.actions

export default formSlice.reducer