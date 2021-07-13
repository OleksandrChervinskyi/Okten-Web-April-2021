import './App.css';
import {Todos} from "./features/dataFromBackend/Todos";
import {Counter} from "./features/counter/Counter";
import {Form} from "./features/form/Form";

function App() {
    return (
        <div className="App">
            <Counter/>
            <Form/>
            <Todos/>
        </div>
    );
}

export default App;
