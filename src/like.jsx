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
        <div className="main">
             <h1>Please click on like button</h1>
             <h1>{like}<i  class="bi bi-hand-thumbs-up-fill" onClick={increase}></i>&nbsp;&nbsp;
              {dislike}<i  class="bi bi-hand-thumbs-down-fill" onClick={decrease}></i></h1>
        </div>
    )
}
export default Click