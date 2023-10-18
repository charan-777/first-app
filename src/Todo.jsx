import React from "react";
function Todos(props){

 console.log(props)
    return(
        <div className="mybox">
            <b style={props.t.status===true?{textDecoration:"line-through"}:{}}>{props.t.title} </b>
            <button onClick={()=>{props.f(props.idx)}}>Delete</button>
            {
                props.t.status===true && <button onClick={props.undo}>Undo</button>
            }
            {
                props.t.status===false && <button onClick={props.done}>Done</button>
            }  
        </div>
    )

    
}
export default React.memo(Todos) 