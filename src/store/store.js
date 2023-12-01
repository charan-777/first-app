import {combineReducers, createStore} from "redux"
import CounterReducer from "./reducers/counter.reducer"
import todolistReducer from "./reducers/todolist.reducer"
var finalReducer=combineReducers({c:CounterReducer,t:todolistReducer})
var store=new createStore(finalReducer)
export default store
