import './App.css';
import {Todos} from "./features/dataFromBackend/Todos";
import {Counter} from "./features/counter/Counter";
import {Form} from "./features/forms/Form";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import {OneTodoDetails} from "./features/dataFromBackend/OneTodoDetails";
import {Links} from "./features/links";

function App() {
    return (


        <div className="App">
            <Router>
                <Counter/>
                <Form/>
                <Todos/>
            </Router>
        </div>

    );
}

export default App;
