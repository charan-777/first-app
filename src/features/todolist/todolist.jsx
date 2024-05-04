import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deltodo } from "./todoslice";
function Todolist(){
    var {todolist}=useSelector(state=>state.t)
    console.log(todolist)
    var [todo,setTodo]=useState('')
    var dispatch=useDispatch()
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setTodo(e.target.value)}}/>
            <button onClick={()=>{dispatch(addtodo(todo))}}>AddTodo</button>
            {
                todolist?.map((t,i)=>{
                    return <li>
                        {t}
                        <button onClick={()=>(dispatch(deltodo(i)))}>Delete</button>
                        </li>
                })
            }
        </div>
    )
}
export default Todolist