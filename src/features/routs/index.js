import {Route, Switch} from "react-router-dom";
import {TodoDetails} from "../dataFromBackend/TodoDetails";
import {Todos} from "../dataFromBackend/Todos";
import {Counter} from "../counter/Counter";


export const Routs = () => {
    return (
        <>
            <Switch>
                <Route path={'/todos/:id'} component={TodoDetails}/>
                <Route path={'/todos'} component={Todos}/>
                <Route path={'/'} component={Counter} />
            </Switch>
        </>
    )
}