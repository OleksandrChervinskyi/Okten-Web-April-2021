import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Counter} from "./components/Counter";
import {Links} from "./components/Links";
import {Routs} from "./components/Routs";

function App() {



    return (
        <Router>
            <Counter/>
            <hr/>

            <Links/>
           <Routs/>

        </Router>
    );
}

export default App;