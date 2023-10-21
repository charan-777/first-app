import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
function Form() {
    var [studentform, setStudentform] = React.useState([])
    var [modify,setModify]=React.useState([])
    var Student = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            Dob: "",
            Email: "",

        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("please fill this field"),
            lastname: Yup.string().required("please fill this field"),
            Dob: Yup.date().required("please fill the right age"),
            Email: Yup.string().required("please fill this field"),
        }),
        onSubmit: (value) => {
            setStudentform([...studentform, value])
        }

    })
    function eliminate(i){
        var temp=([...studentform])
        temp.splice(i,1)
        setStudentform([...temp])
    }
    function update(){
        var temp=([...modify])
    }

    return (
        <div className="mybox">
            <h2>Student Form</h2>
            <form onSubmit={Student.handleSubmit}>
                Fristname:<input type="text" placeholder="Firstname" name="firstname" onBlur={Student.handleBlur} onChange={Student.handleChange} />
                <div>
                    <b>{Student.touched.firstname && Student.errors.firstname}</b>
                </div>
                <br />
                Lastname:<input type="text" placeholder="Lastname" name="lastname" onBlur={Student.handleBlur} onChange={Student.handleChange} />
                <div>
                    <b>{Student.touched.lastname && Student.errors.lastname}</b>
                </div>
                <br />
                Date Of Birth:<input type="date" name="Dob" onBlur={Student.handleBlur} onChange={Student.handleChange} />
                <div>
                    <b>{Student.touched.Dob && Student.errors.Dob}</b>
                </div>
                <br />
                Email:<input type="email" placeholder="Email" name="Email" onBlur={Student.handleBlur} onChange={Student.handleChange} />
                <div>
                    <b>{Student.touched.Email && Student.errors.Email}</b>
                </div>
                <br />

                <button>Add button</button>
            </form>
            <hr />
            <ul>
                {
                    studentform.map((Card,i) => {
                        return (
                            <li>
                                <h3>{Card.firstname}</h3>
                                <h3>{Card.lastname}</h3>
                                <h3>{Card.Dob}</h3>
                                <h3>{Card.Email}</h3>
                                <h3>{Card.branch}</h3>
                                <button onClick={()=>{eliminate(i)}}>Delete</button>
                                <button onClick={()=>{update()}}>Edit</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>


    )
}
export default Form