import React from "react";
function Hook(){
    var [x,setX]=React.useState()
    var [a,setA]=React.useState(0)
    var [b,setB]=React.useState(0)

    var add=React.useMemo(()=>{
        return sum(a,b)
    },[a,b])

    function sum(a,b){
        
    }
    return(
        <div>
            <h1>App....</h1>x:{" "}
            <input type="text" onChange={(e)=>{setX(e.target.value)}}/>
            <br />
            <br />a:{" "}
            <input type="text" onChange={(e)=>{setA(e.target.value)}}  value={a}/>
            <br />b:{" "}
            <input type="text" onChange={(e)=>{setB(e.target.value)}} value={b}/>
          
        </div>
    )
}
export default Hook