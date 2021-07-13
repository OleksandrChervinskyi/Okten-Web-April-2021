import {createSlice} from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        title: '',
        description: '',
        isLoading: false
    },
    reducers: {
        addTitleFromFormToStore(state, action) {
            state.title = action.payload
        },
        addDescriptionFromFormToStore(state, action) {
            state.description = action.payload
        },
        isLoadingTrue(state) {
            state.isLoading = true
        },
        isLoadingFalse(state) {
            state.isLoading = false
        }
    }
})

export const {
    addTitleFromFormToStore, addDescriptionFromFormToStore, isLoadingTrue, isLoadingFalse
} = formSlice.actions

export default formSlice.reducer