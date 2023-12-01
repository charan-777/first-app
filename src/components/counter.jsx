import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/action";
import { incCount } from "../store/action";
import { decCount } from "../store/action";
function Counter(props){
    var [todos,setTodos]=React.useState("")
    return(
        <div className="mybox">
         <input type="text" onChange={(e)=>{setTodos(e.target.value)}} />
         <button onClick={()=>{props.dispatch(addTodo(todos))}}>AddTodo</button>
         <hr />
         <h1>counter:{props.c.count}</h1>
         <button onClick={()=>{props.dispatch(incCount())}}>increment</button>
         <button onClick={()=>{props.dispatch(decCount())}}>decrememnt</button>
        </div>
    )
}
export default connect(store=>store)(Counter)