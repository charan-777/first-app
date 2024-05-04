import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}
export const counterslice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.count++
        },
        dec:(state,action)=>{
            state.count--
        }
    }
})
export var{inc,dec} =counterslice.actions
export default counterslice.reducer