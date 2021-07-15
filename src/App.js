import './App.css';
import {Todos} from "./features/dataFromBackend/Todos";
import {Counter} from "./features/counter/Counter";
import {Form} from "./features/forms/Form";
import {BrowserRouter as Router} from "react-router-dom";
import {Routs} from "./features/routs";


function App() {
    return (


        <div className="App">
            <Router>
                <Counter/>
                <Form/>
                <Todos/>

                <Routs/>
            </Router>
        </div>

    );
}

export default App;
