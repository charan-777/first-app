import React from "react";
import Todo from "./Todo"
function Todolist(){
    var [todos,setTodos]=React.useState(["get bmw","get villa","book tickets"])
    function addtodo(){
        var z=document.getElementById("d1").value
        setTodos([...todos,z])
    }
    var del=React.useCallback(function(i){
        var temp=[...todos]
        temp.splice(i,1)
        setTodos([...temp])
    },[todos])
    
    return(
        <div className="mybox">
            <h2>Todolist</h2>
            <input id="d1" type="text" />
            <button onClick={()=>{addtodo()}} >Add todo</button>
            {
                todos.map((todo,index)=>{
                    return (<Todo t={todo} f={del} i={index} key={index}></Todo>)
                })
            }
        </div>
    )
}
export default Todolist;