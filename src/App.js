import './App.css';
import {CreacteTodoForm} from "./CreacteTodoForm";
import {TodosList} from "./TodosList";
import {useDispatch, useSelector} from "react-redux";
import {inc, incPay} from "./features/counter/counterSlice";
import {addTodosToStore, fetchTodos} from "./features/dataFromBackend/todosSlice";
import {useEffect} from "react";
import {Todos} from "./features/dataFromBackend/Todos";
import {Counter} from "./features/counter/Counter";
import {Form} from "./features/form/Form";

function App() {

    // const onTodoCreate = async (title, description) => {
    //     if (!title || !description) return
    //
    //     const resp = await fetch('http://localhost:8888/create-todo', {
    //         method: 'POST',
    //         body: JSON.stringify({title, description}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const data = await resp .json()
    //
    // }


    return (
        <div className="App">

            <Counter/>
            <Form/>
            <Todos/>


            {/*<CreacteTodoForm onSubmit={onTodoCreate}/>*/}
            {/*<TodosList/>*/}
        </div>
    );
}

export default App;
