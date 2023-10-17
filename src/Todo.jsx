import React from "react";
function Todo(props){
    console.log(props.i)
    return(
        <div className="mybox">
            <b>{props.t}</b>
            <button onClick={()=>{props.f(props.i)}}>Delete</button>
        </div>
    )
}

export default React.memo(Todo)