import React from "react";
function Counter(){
    var [count ,setCount]=React.useState(100)
    function inc(){
        setCount(count+10)
    }
    function inc1(){
        setCount(count+100)
    }
    function dec(){
        setCount(count-10)
    }
    return(
        <div className="main">
            <b>welcome to class component</b>
            <h1>count:{count}</h1>
            <button onClick={inc}>increment by 10</button>
            <button onClick={inc1}>increment by 100</button>
            <button onClick={dec}>decrement by 10</button>
            
        </div>
    )
}
export default Counter