import {useDispatch, useSelector} from "react-redux";
import {dec, inc, incPay, reset} from "./counterSlice";

export const Counter = () => {
    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch()

    return (
        <>
            <h1>
                Counter - {counter}
            </h1>
            <button onClick={() => {
                dispatch(inc())
            }}>
                Inc on 1
            </button>
            <button onClick={() => {
                dispatch(incPay(10))
            }}>
                Inc on 10
            </button>
            <button onClick={() => {
                dispatch(dec())
            }}>
                Dec on 1
            </button>
            <button onClick={() => {
                dispatch(reset())
            }}>
                Reset
            </button>
            <hr/>
        </>

    )
}