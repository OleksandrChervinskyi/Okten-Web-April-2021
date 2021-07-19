import {reducers} from "./reducers/combineReducers";
import {createStore} from "redux";

const store = createStore(reducers)

export {store}