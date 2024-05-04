import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todolist:["clearbill","cleancar","buy a car","get fruits"]
}
export const todoslice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todolist.push(action.payload)
        },
        deltodo:(state,action)=>{
            state.todolist.splice(action.payload,1)
        }
    }
})
export var {addtodo,deltodo}=todoslice.actions
export default todoslice.reducer