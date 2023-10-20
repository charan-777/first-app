import React from "react";
function Form() {
    var [studentform, setStudentform] = React.useState({
        Firstname: "",
        Lastname: "",
        DOB: "",
        Gender: "",
        technologies: [],
    })
    function addstud() {
        alert(JSON.stringify(studentform))
    }
    function handlefirstname(e) {
        setStudentform({ ...studentform, Firstname: e.target.value })
    }
    function handlelastname(e) {
        setStudentform({ ...studentform, Lastname: e.target.value })
    }

    function handledateofbirth(e) {
        setStudentform({ ...studentform, DOB: e.target.value })
    }
    function handlegender(e) {
        setStudentform({ ...studentform, Gender: e.target.value })
    }
    function handletechs(e) {
        if (e.target.checked === true) {
            setStudentform({ ...studentform, technologies: [...studentform.technologies, e.target.value] })
        }
        else {
            var temp=([...studentform])
            var ind=temp.technologies.indexOf(e.target.value)
               temp.splice(ind,1)
            setStudentform([...studentform.technologies[{...temp}]])
        }
    }
    return (
        <div className="mybox">
            <h2>StudentForm</h2>
            Firstname:<input type="text" onChange={(e) => { handlefirstname(e) }} />
            <br />
            Lastname:<input type="text" onChange={(e) => { handlelastname(e) }} />
            <br />
            Date of Birth: <input type="date" onChange={(e) => { handledateofbirth(e) }} />
            <br />
            Gender:<input type="radio" name="gen" value="male" onChange={(e) => { (handlegender(e)) }} />:Male
            <input type="radio" name="gen" value="female" onChange={(e) => { (handlegender(e)) }} />:Female
            <input type="radio" name="gen" value="others" onChange={(e) => { (handlegender(e)) }} />:Others
            <br />
            technologies: <br />
            <input type="checkbox" value="nodejs" onChange={(e) => { (handletechs(e)) }} />:Nodejs
            <br />
            <input type="checkbox" value="reactjs" onChange={(e) => { (handletechs(e)) }} />:Reactjs
            <br />
            <input type="checkbox" value="expressjs" onChange={(e) => { (handletechs(e)) }} />:Expressjs
            <br />
            <input type="checkbox" value="mongodb" onChange={(e) => { (handletechs(e)) }} />:MongoDB
            <br />
            <button onClick={() => { addstud() }}>Add Button</button>
        </div>
    )
}
export default Form