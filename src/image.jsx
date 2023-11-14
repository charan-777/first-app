import React from "react";
function Image() {
    var [pic, setPic] = React.useState([
        "https://media.istockphoto.com/id/170096587/photo/basketball.jpg?s=612x612&w=0&k=20&c=It1xaV5jYkoCOAlxaOwdmTbPHeIcXUZWECaPzriwh1w=",
        "https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg",
        "https://pngimg.com/uploads/cricket/cricket_PNG135.png"
    ])
    function next() {
        var a = document.getElementById("d1");
        var index = 0;
        a.src = pic[index]
        if (index < pic.length-1) {
            index++
            a.src = pic[index]
        }
        else {
            index = 0;
            a.src = pic[index]
        }
    }
    function prev(){
        var a = document.getElementById("d1");
        var index = 0;
        a.src = pic[index]
        if(index===0){
            index=pic.length-1
            a.src=pic[index]
        }
        else{
            index--
            a.src=pic[index]
        }
    }
    return (
        <div className="main">
            <button onClick={prev}>Prev</button>
            <img id="d1" src="" alt="" />
            <button onClick={next}>Next</button>
        </div>
    )
}
export default Image