import {Route} from "react-router-dom";
import {Todos} from "../dataFromBackend/Todos";

export const Routs = () => {
    return (
        <>
            <Route path={'/todos'} component={Todos}/>
            <Route path={'/'} > Main</Route>
        </>


    )
}