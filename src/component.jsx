import React from "react";
function Comp(props){
    var [count, setCount]=React.useState(props.i)
    function inc(){
        setCount(count+props.step)
    }
    function dec(){
        setCount(count-props.step)
    }
    return(
        <div className="main">
            <h1>count:{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Comp