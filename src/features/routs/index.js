import {Route, Switch} from "react-router-dom";
import {TodoDetails} from "../dataFromBackend/TodoDetails";


export const Routs = () => {
    return (
        <>
            <Switch>
                <Route path={'/todos/:id'} component={TodoDetails}/>
                <Route path={'/'} exact> Main Page</Route>
            </Switch>


        </>
    )
}