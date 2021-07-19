import {useState} from "react";
import {decCounter, incCounter, incCustomCounter, resetCounter} from "../redux/create-action";
import {useDispatch, useSelector} from "react-redux";

export const Counter = () => {
    const [customCounter, setCustomCounter] = useState(0)

    const counter = useSelector(({counterReducer: {counter: {value}}}) => value)
    const dispatch = useDispatch()

    return (
        <>
            <div className="App">
                <h2>Hello, counter = {counter}</h2>


            </div>

            <button onClick={() => {
                dispatch(incCounter())
            }}>Inc counter
            </button>
            <button onClick={() => {
                dispatch(decCounter())
            }}>Dec counter
            </button>
            <button onClick={() => {
                dispatch(resetCounter())
            }}>Reset counter
            </button>

            {/*Custom increment*/}
            <input value={customCounter}
                   onChange={({target: {value}}) => setCustomCounter(value)}
                   type={'number'}
                   placeholder={'Enter ur number'}/>
            <button onClick={() => dispatch(incCustomCounter(customCounter))}>
                Inc on {customCounter}
            </button>
        </>
    )
}