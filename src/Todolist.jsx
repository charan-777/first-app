import React from "react";
function Todolist(){
    var [todo, setTodo]=React.useState(['cooldrinks','moksha bus fee','manu shoes','memory card','connector'])
    function add(){
        var inp=document.getElementById("newtodo").value
        setTodo([...todo,inp])
    }
 return(
    <div className="main">
        <h1>Todolist</h1>
        <input type="text" id="newtodo"/>
        <button onClick={add}>Addtodo</button>
        {
            todo.map((a)=>{
                return <li>{a}</li>
            })
        }
    </div>
 )
}
export default Todolist