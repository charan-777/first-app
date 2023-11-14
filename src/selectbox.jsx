import React from "react";
function Courses(){
    var [selectcourse,setSelectcourse]=React.useState()
    function handleTechs(e){
        setSelectcourse(e.target.value)
    }
    return(
        <div className="main">
             <select onChange={handleTechs}>
              <option value="null" selected disabled>Please Select A Course</option>
              <option value="react">ReactJS</option>
              <option value="angualr">Angular</option>
              <option value="nodejs">Nodejs</option>
              <option value="express">Express</option>
              <option value="mongo">Mongodb</option>
              <option value="mongoose">Mongoose</option>
              <option value="mysql">MySql</option>
            </select>
            <hr/>
            <h1>selected Technology:{selectcourse}</h1>
        </div>
    )
}
export default Courses