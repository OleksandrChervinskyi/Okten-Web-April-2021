import {Route, Switch} from 'react-router-dom'
import {Posts} from "./endpoints/Posts";
import {Comments} from "./endpoints/Comments";
import {Todos} from "./endpoints/Todos";
import {Photos} from "./endpoints/Photos";
import {Users} from "./endpoints/Users";
import {Album} from "./endpoints/Album";

export const Routs = () => {
    return (
        <>
            <Switch>
                <Route path={'/comments'} component={Comments}/>
                <Route path={'/users'} component={Users}/>
                <Route path={'/albums'} component={Album}/>
                <Route path={'/todos'} component={Todos}/>
                <Route path={'/photos'} component={Photos}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/'}>Main page</Route>
            </Switch>
        </>
    )
}