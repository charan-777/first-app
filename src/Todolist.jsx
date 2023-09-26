import React,{useState} from "react";
function Todolist(){
    var [x,setX]=useState([])
    function abc(){
        setX([...x,document.getElementById("d1").value])
    }
    function del(i){
        x.splice(i,1)
        setX([...x])
    }
       return(
        <div className="mybox">
            <div>
            <input id ="d1" type="text" />
            <button onClick={abc}>Add list</button>
            <ul>{
                x.map((a,i)=>{
                    return<li>{a}  <button onClick={del}>Delete</button></li>
                })
            }
            </ul>
            </div>
        </div>
    )
}
export default Todolist