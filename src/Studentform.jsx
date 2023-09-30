import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios"
function Studentform() {
    var [students, setStudents] = React.useState([])
    var Studentform = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            gender: "",
            age: "",
            username:"",
            password: ""

        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("please fill this required field "),
            lastname: Yup.string().required("please fill this required field"),
            password: Yup.string().required("please fill this required field").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "Give me the correct pattern"),
            age: Yup.string().required("please fill this required field").test({
                name: "GenderBasedAgeValidation",
                message: "Give Me Correct Age",
                test: (value, a) => {
                    if (a.parent.gender === "male" && value > 21) {
                        return true
                    }
                    if(a.parent.gender ==="female" && value>18){
                        return true
                    }
                }
            }),
            username:Yup.string().required("please fill this required field").test({
                name:"Check Username Asynchronous",
                message:"Name Is Already Exist",
                test:( async (value,a)=>{
               var res= await axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`)
               if(res.data.length!==0){
                return false
               }
               else{
                return true
               }
                })
            })
        }),
        onSubmit: (values) => {
            console.log(values)
            setStudents([...students, values])
        }
    })
    return (
        <div style={{ padding: "10px", margin: "10px", border: "1px solid" }}>
            <h1>Studentform</h1>
            <form onSubmit={Studentform.handleSubmit}>
                <input placeholder="firstname" type="text" name="firstname" onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} />
                <div>
                    <b>{Studentform.touched.firstname && Studentform.errors.firstname}</b>
                </div>
                <br />
                <input placeholder="lastname" type="text" name="lastname" onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} />
                <div>
                    <b>{Studentform.touched.lastname && Studentform.errors.lastname}</b>
                </div>
                <br />
                <input type="radio" name="gender" value="male" onBlur={Studentform.handleBlur} onChange={Studentform.handleChange}/>:Male
                <input type="radio" name="gender" value="female" onBlur={Studentform.handleBlur} onChange={Studentform.handleChange}/>:Female
                <br />
                <input placeholder="age" type="text" name="age" onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} />
                <div>
                    <b>{Studentform.touched.age && Studentform.errors.age}</b>
                </div>
                <br />
                <input type="text" placeholder="username" name="username" onBlur={Studentform.handleBlur} onChange={Studentform.handleChange}/>
                <div>
                    <b>{Studentform.touched.username && Studentform.errors.username}</b>
                </div>
                <br />
                <input type="text" placeholder="password" name="password" onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} />
                <div>
                    <b>{Studentform.touched.password && Studentform.errors.password}</b>
                </div>
                <br />
                <button>Add button</button>
            </form>
            <hr />
            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    students.map((a) => {
                        return (
                            <li style={{ width: "100px", listStyle: "none", padding: "10px", margin: "10px", border: "1px solid" }}>
                                <h2>{a.firstname}</h2>
                                <h2>{a.lastname}</h2>
                                <h2>{a.age}</h2>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Studentform