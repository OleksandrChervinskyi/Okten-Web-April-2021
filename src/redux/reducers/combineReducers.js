import {jsonReducer} from "./jsonReducers";
import {counterReducer} from "./counterReducer";
import {combineReducers} from "redux";

const reducers = combineReducers({jsonReducer, counterReducer})

export {reducers}