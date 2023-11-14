import React from "react";
function Comp(){
    var [students,setStudents] = React.useState(['anu','priya','sai','venu','nani'])
    var [mytext,setMytext]=React.useState("");

    function handleInput(e){
        setMytext(e.target.value)
    }
    return(
        <div className="main">
            {
                students.map((s)=>{
                    return <div><input type="radio" name="myname" value={s} onChange={handleInput}/>{s}</div>
                })
            }
            <h1>you have Entered:{mytext}</h1>
        </div>
    )
}
export default Comp