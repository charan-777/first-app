import React,{useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0)
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    function res(){
        setCount(0)
    }
    return(
        <div className="mybox">
            <h1>welcome to Counter:{count}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
            <button onClick={res}>Reset</button>
            
        </div>
    )
}
export default Counter; 
