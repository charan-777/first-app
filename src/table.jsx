import React from "react";
function Students() {
    var [mystudents, setMystudents] = React.useState([
        {
            "firstname": "praveen",
            "lastname": "gubbala",
            "age": 36,
            "gender": "female",
            "city": "hyd",
            "salary": 10000
        },
        {
            "firstname": "srikanth",
            "lastname": "gubbala",
            "age": 32,
            "gender": "male",
            "city": "bengaluru",
            "salary": 20000
        },
        {
            "firstname": "pradeep",
            "lastname": "reddy",
            "age": 21,
            "gender": "male",
            "city": "hyd",
            "salary": 25000
        },
        {
            "firstname": "preeti",
            "lastname": "haia",
            "age": 31,
            "gender": "female",
            "city": "delhi",
            "salary": 30000
        },
        {
            "firstname": "kiran",
            "lastname": "gubbala",
            "age": 52,
            "gender": "male",
            "city": "bengaluru",
            "salary": 29000
        },
        {
            "firstname": "jayaram",
            "lastname": "reddy",
            "age": 54,
            "gender": "male",
            "city": "mumbai",
            "salary": 99000
        }
    ])
    var [newstudents, setNewstudents] = React.useState(
        {
            firstname: "",
            lastname: "",
            age:"" ,
            gender: "",
            city: "",
            salary:""
    }
    )
    function updateFn(e){
        setNewstudents({...newstudents,firstname:e.target.value})
    }
    
    function updateLn(e){
        setNewstudents({...newstudents,lastname:e.target.value})
    }
    function updateAge(e){
        setNewstudents({...newstudents,age:e.target.value})
    }
    function updateGen(e){
        setNewstudents({...newstudents,gender:e.target.value})
    }
    function updateCity(e){
        setNewstudents({...newstudents,city:e.target.value})
    }
    function updateSal(e){
        setNewstudents({...newstudents,salary:e.target.value})
    }
    function add(){
        setMystudents([...mystudents,{...newstudents}])
        
    }
    return (
        <div>
            <h1>React Student</h1>
            <input type="text" onKeyUp={updateFn}  placeholder="Firstname" /><br />
            <input type="text" onKeyUp={updateLn} placeholder="Lastname" /><br />
            <input type="text" onKeyUp={updateAge} placeholder="Age" /><br />
            <input type="text" onKeyUp={updateGen} placeholder="Gender" /><br />
            <input type="text" onKeyUp={updateCity} placeholder="City" /><br />
            <input type="text" onKeyUp={updateSal} placeholder="Salary" /><br />
            <button onClick={add}>Add student</button>
            <table border="1px solid">
                <thead>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Salary</th>
                </thead>
                <tbody>
                    {
                        mystudents.map((a) => {
                            return <tr>
                                <td>{a.firstname}</td>
                                <td>{a.lastname}</td>
                                <td>{a.age}</td>
                                <td>{a.gender}</td>
                                <td>{a.city}</td>
                                <td>{a.salary}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Students