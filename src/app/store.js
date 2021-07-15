import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import todosSlice from "../features/dataFromBackend/todosSlice";
import formSlice from "../features/forms/formSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        endpoints : todosSlice,
        formDetails : formSlice
    }
})