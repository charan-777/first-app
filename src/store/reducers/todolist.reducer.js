import { ADDTODO } from "../actionType"
const initialState={
    todolist:["clearbills","cleancar","buy bike"]
}
function  todolistReducer(state=initialState,action){
    if(action.type===ADDTODO){
        return{todolist:[...state.todolist,action.payload]}
    }
    return state
}
export default todolistReducer