import React from "react";
function Comp(){
    var [input,setInput]=React.useState()
    function entered(){
        var temp=document.getElementById("d1").value
        setInput(temp)
    }
    return(
        <div>
            
                <input type="text" id="d1" onKeyUp={entered}/>
                <h1>Entered Text is:{input}</h1>
        </div>
    )
}
export default Comp