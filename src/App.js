import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {
    decCounter,
    incCounter,
    resetCounter
} from "./redux/create-action";
import {BrowserRouter as Router} from "react-router-dom";
import {Links} from "./components/Links";
import {RoutsApp} from "./components/RoutsApp";

function App() {

    const counter = useSelector(({counters: {counter: {value}}}) => value)
    const dispatch = useDispatch()

    return (
        <Router>
            <div className="App">
                Hello, counter = {counter}
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

            <hr/>
            <Links/>
            <RoutsApp/>

        </Router>
    );
}

export default App;