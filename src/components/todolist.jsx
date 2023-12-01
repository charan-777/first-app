import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/action";
function Todolist(props){
    var [todos,setTodos]=React.useState("")
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setTodos(e.target.value)}} />
            <button onClick={()=>{props.dispatch(addTodo(todos))}}>Addtodo</button>
                <ul>
                    {
                        props.t.todolist.map((todo)=>{
                            return(
                                <li>{todo}</li>
                            )
                        })
                    }
                    
                </ul>
        </div>
    )
}
export default connect(store=>store)(Todolist)