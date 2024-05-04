import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterslice";
function Counter(){
    var {count}=useSelector(state=>state.c)
    var dispatch=useDispatch()
    console.log(count)
    return(
        <div className="mybox">
                <h1>counter:{count}</h1>
                <button onClick={()=>{dispatch(inc())}}>increment</button>
                <button onClick={()=>{dispatch(dec())}}>decrement</button>
        </div>
    )
}
export default Counter