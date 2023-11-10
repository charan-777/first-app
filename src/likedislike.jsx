import React from "react";
function Click(){
    var [like ,setLike]=React.useState(0)
    var [dislike ,setDislike]=React.useState(0)
    function increase(){
        setLike(like+1)
    }
    function decrease(){
        setDislike(dislike+1)
    }
    return(
        <div>
                <button onClick={increase}>Like</button> <b>{like}</b>
                <br />
                <button onClick={decrease}>Dislike</button> <b>{dislike}</b>
        </div>
    )
}
export default Click