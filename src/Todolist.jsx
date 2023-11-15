import React from "react";
import Todo from "./Todo";
function Todolist(){
    var [todos,setTodos]=React.useState([
        {
          title:'clear bills',
          status:false
        },
        {
          title:'Moksha School',
          status:true
        },
        {
          title:'Manas Bus Fee',
          status:false
        },
        {
          title:'Gold Bill',
          status:false
        },
        {
          title:'Current Bill',
          status:true
        },
      ])
      function addtodo(){
        var newtask=document.getElementById("d1").value
       setTodos([...todos,{title:newtask,status:false}])
      }
      var done =React.useCallback(function(i){
        var temp=([...todos])
        temp[i].status=!temp[i].status
        setTodos([...temp])
      },[todos])
    return(
        <div className="main">
            <div>
            <h1>Todlist</h1>
            <input type="text" id="d1"/>
            <button onClick={addtodo}>AddTask</button>
            </div>
            <br />
            <div className="list">
            {
               
                todos.map((todo,i)=>{
                    return(
                        <Todo title={todo.title} status={todo.status} done={done} i={i}></Todo>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Todolist