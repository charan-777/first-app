import React from "react";
function Player() {
    var [players, setPlayers] = React.useState(['rohit', 'surya', 'ishan', 'bhumra', 'tilak', 'green', 'bravis', 'archer', 'tim david'])
    var [addplayers,setAddplayers]=React.useState([])
    
    function selectedplayers(index){
        addplayers.push(players[index])
        players.slice(index,1)
       
    }
    return (
        <div className="main">
            <div className="sec">
                <h1>Players Remaining</h1>
                <h1>Players selected</h1>
            </div>

            <div className="list">
                <ul>
                    {
                        players.map((a,i) => {
                            return <li onClick={()=>{selectedplayers(i)}}>{a}-{i}</li>
                        })
                    }
                </ul>
            </div>
            <div className="last"></div>
        </div>
    )
}
export default Player