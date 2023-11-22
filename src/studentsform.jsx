import React from "react";
function Form() {
    var [stdform, setStdform] = React.useState({
        firstname: "",
        lastname: "",
        dob: "",
        gender: "",
        technologies: ""
    })
    function add(e) {
        alert(JSON.stringify(stdform))
    }
    function handlefirstname(e) {
        setStdform({ ...stdform, firstname: e.target.value })
    }
    function handlelastname(e) {
        setStdform({ ...stdform, lastname: e.target.value })
    }
    function handledob(e) {
        setStdform({ ...stdform, dob: e.target.value })
    }
    function handlegender(e) {
        setStdform({ ...stdform, gender: e.target.value })
    }
    function handletech(e) {
        if (e.target.checked === true) {
            setStdform({ ...stdform, technologies: [...stdform.technologies, e.target.value] })
        }
        else {
            var temp = [...stdform.technologies]
            var ind = temp.indexOf(e.target.value)
            temp.splice(ind, 1)
            setStdform({ ...stdform, technologies: [...temp] })
        }
    }
    return (
        <div className="main">
            <h2>StudentForm</h2>

            Fristname:<input type="text" onChange={(e) => { handlefirstname(e) }} />
            <br />
            <br />
            Lastname:<input type="text" onChange={(e) => { handlelastname(e) }} />
            <br />
            <br />
            Date of Birth: <input type="date" onChange={(e) => { handledob(e) }} />
            <br />
            <br />
            Gender:<input type="radio" name="gen" onChange={(e) => { handlegender(e) }} value="male" />:Male
            <input type="radio" name="gen" onChange={(e) => { handlegender(e) }} value="female" />:Female
            <input type="radio" name="gen" onChange={(e) => { handlegender(e) }} value="other" />:other
            <br />
            <br />
            <input type="checkbox" onChange={(e) => { handletech(e) }} value="nodejs" />:Nodejs
            <br />
            <input type="checkbox" onChange={(e) => { handletech(e) }} value="angularjs" />:Angularjs
            <br />
            <input type="checkbox" onChange={(e) => { handletech(e) }} value="mongodb" />:MongoDB
            <br />
            <input type="checkbox" onChange={(e) => { handletech(e) }} value="expressjs" />:Epressjs
            <br />
            <input type="checkbox" onChange={(e) => { handletech(e) }} value="reactjs" />:Reactjs
            <br />

            <button onClick={(e) => { add(e) }}>Add student</button>

        </div>
    )
}
export default Form