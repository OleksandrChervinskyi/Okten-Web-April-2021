import {createSlice} from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        inc(state) {
            state.value++
        },
        incPay(state, action) {
            state.value = state.value + action.payload
        },
        dec(state) {
            state.value--
        },
        reset(state) {
            state.value = 0
        }
    }
})

export const {inc, incPay, dec, reset} = CounterSlice.actions

export default CounterSlice.reducer