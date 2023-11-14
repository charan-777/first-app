import React from "react";
function Array(){
    var [student,setStudent]=React.useState(['Madhan','Ramu','Govardhan','Charan','Vishnu','Fazil'])
    function ascen(){
        var temp=([...student])
        temp.sort()
        setStudent([...temp])
    }

    function descen(){
        var temp=([...student])
        temp.sort().reverse()
        setStudent([...temp])
    }
    return(
        <div className="main">
            <div>
            <h1>Students</h1>
            <button onClick={()=>{ascen()}}>Ascending</button>
            <button onClick={()=>{descen()}}>Descending</button>
            </div>
            <br />
            {
                student.map((a)=>{
                    return <li>{a}</li>
                })
            }
        </div>
    )
}
export default Array