import React from "react";
function Addnumber(){
 var[number , setNumber]=React.useState(0)
 function add(){
    var inp1=+document.getElementById("newnum").value
    var inp2=+document.getElementById("newnum1").value
    setNumber(inp1+inp2)
   
 }
 function sub(){
    var inp1=+document.getElementById("newnum").value
    var inp2=+document.getElementById("newnum1").value
    setNumber(inp1-inp2)
   
 }
 function mul(){
    var inp1=+document.getElementById("newnum").value
    var inp2=+document.getElementById("newnum1").value
    setNumber(inp1*inp2)
   
 }
 function div(){
    var inp1=+document.getElementById("newnum").value
    var inp2=+document.getElementById("newnum1").value
    setNumber(inp1/inp2)
   
 }
    return(
        <div>
        
            <input type="text" id="newnum"/>
            <input type="text" id="newnum1"/>
            <button onClick={add}>Add To numbers</button>
            <button onClick={sub}>Sub To numbers</button>
            <button onClick={mul}>Mul To numbers</button>
            <button onClick={div}>Div To numbers</button>
            <h1>{number}</h1>
        </div>
    )
}
export default Addnumber