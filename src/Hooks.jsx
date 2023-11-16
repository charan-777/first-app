import React from "react";
function Frist(props){

    return(
        <div className="main">
            <h4>Frist....</h4>
            <button onClick={props.alert}>Greet</button>
        </div>
    )
}
export default Frist