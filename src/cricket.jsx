import React from "react";
function Cricket() {
    var [score,setScore]=React.useState(0)
    var [wicket,setWicket]=React.useState(0)

    function handleClick(i){
        var temp=score+i
        setScore(temp)
    }
    
    function wickethandler(ind){
        var allwickets=10
        if(wicket<allwickets){
         var temp= wicket+ind
         setWicket(temp)
        }
        else{
            setWicket(10)
        }
    }
    return (
        <div>
             <div className="col float-right">
                    <table>
                        <tr>
                            <td><h2>{score}/</h2></td>
                            <td><h2>{wicket}</h2></td>
                        </tr>
                    </table>
                     
                </div>    
            <div>
                <button onClick={()=>{handleClick(0)}}>0</button>
                <button onClick={()=>{handleClick(1)}}>1</button>
                <button onClick={()=>{handleClick(2)}}>2</button>
                <button onClick={()=>{handleClick(3)}}>3</button>
                <button onClick={()=>{handleClick(4)}}>4</button>
                <button onClick={()=>{handleClick(5)}}>5</button>
                <button onClick={()=>{handleClick(6)}}>6</button>
            </div>
            <div>
                <button onClick={()=>{wickethandler(1)}}>Wicket</button>
                <button onClick={()=>{handleClick(1)}}>Wide ball</button>
                <button onClick={()=>{handleClick(1)}}>No ball</button>
            </div>

            <div >
               
            </div>
        </div>
    )
}

export default Cricket