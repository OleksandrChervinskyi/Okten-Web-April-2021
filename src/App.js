import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Routs} from "./features/routs";
import {Links} from "./features/links";


function App() {
    return (


        <div className="App">
            <Router>
                <Links/>

                <Routs/>
            </Router>
        </div>

    );
}

export default App;
