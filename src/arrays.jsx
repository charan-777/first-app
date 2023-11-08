import React from "react";
function Component(){
    var [students,setStudents] = React.useState(['Cherry','Ramu','Madhan','Govardhan','Vishnu','Fazil'])
    return (
        <div className="render">
            <h1>Students</h1>
            <ul>
                {
                 students.map((s)=>{
                    return <li>{s}</li>
                 })
                }
            </ul>
        </div>
    )
}
export default Component