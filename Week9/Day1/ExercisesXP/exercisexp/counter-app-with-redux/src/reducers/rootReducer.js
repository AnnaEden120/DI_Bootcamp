import { counterReducer} from "./counterRedux/counter.reducer";
import { COUNTER_KEY } from "./counterRedux/counter.reducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
    counterStore: counterReducer
})

export {rootReducer}