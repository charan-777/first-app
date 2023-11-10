import React from "react";
function Counter(){
    var [count ,setCount]=React.useState(100)
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    return(
        <div className="main">
            <h1>count:{count}</h1>
            <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
            
        </div>
    )
}
export default Counter