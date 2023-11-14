import React  from "react";
function Counter(props){
    var [count,setCount]=React.useState(props.i)
    function increase(){
        setCount(count+props.step)
    }
    function decrease(){
        setCount(count-props.step)
    }
    return(
        <div className="main">
                <h1>count:{count}</h1>
                <button onClick={()=>{increase()}}>increment</button>
                <button onClick={()=>{decrease()}}>decrement</button>
            
        </div>
    )
}
export default Counter