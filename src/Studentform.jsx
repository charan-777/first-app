import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";
function Form() {
    var [student, setstudent] = React.useState([])
    var stuForm = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            gender: "",
            age: "",
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("please fill this field").min(2, "fill the fullname"),
            lastname: Yup.string().required("please fill this field"),
            password: Yup.string().required("please fill this field").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "invalid password"),
            age: Yup.string().required("please fill the right age ").test({
                name: "GenderBaseAgevalidation",
                message: "this is not right age to marrie",
                test: ((value, a) => {
                    if (a.parent.gender === "male" && value < 21) {
                        return false
                    }
                    if (a.parent.gender === "female" && value < 18) {
                        return false
                    }
                    else {
                        return true
                    }
                }),
            }),
            // username: Yup.string().required("please enter your username").test({
            //     name: "check username asynchronous",
            //     message: "Already Exist",
            //     test: ((value, a) => {
            //         var p = new Promise((resolve, reject) => {
            //             axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`)
            //                 .then((res) => {
            //                     if (res.data.length !== 0) {
            //                         reject(a.createError({ message: "This user already exist" }))
            //                     }
            //                     else {
            //                         resolve(true)
            //                     }
            //                 })
            //         })
            //         return p;
            //     })
            // })
            username: Yup.string().required("please enter your username").test({
                name: "check username asynchronous",
                message: "Already Exist",
                test: (async (value, a) => {
                    var res = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`)
                        .then((res) => {
                            if (res.data.length !== 0) {
                                return false
                            }
                            else {
                                return true
                            }
                        })
                })
            })

        }),
        onSubmit: (values) => {
            setstudent([...student, values])
        }
    })
    return (
        <div className="main">
            <h1>Student Form</h1>
            <form onSubmit={stuForm.handleSubmit}>
                <input type="text" name="firstname" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} placeholder="Enter your firstname" />
                <div>
                    <b>{stuForm.touched.firstname && stuForm.errors.firstname}</b>
                </div>
                <br />
                <input type="text" name="lastname" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} placeholder="Enter your lastname" />
                <div>
                    <b>{stuForm.touched.lastname && stuForm.errors.lastname}</b>
                </div>
                <br />
                <input type="radio" name="gender" value="male" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} />:Male
                <input type="radio" name="gender" value="female" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} />:Female
                <div>
                    <b>{stuForm.touched.gender && stuForm.errors.gender}</b>
                </div>
                <br />
                <input type="text" name="age" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} placeholder="Enter your age" />
                <div>
                    <b>{stuForm.touched.age && stuForm.errors.age}</b>
                </div>
                <br />
                <input type="text" name="username" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} placeholder="Enter your username" />
                <div>
                    <b>{stuForm.touched.username && stuForm.errors.username}</b>
                </div>
                <br />
                <input type="text" name="password" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} placeholder="Enter your password" />
                <div>
                    <b>{stuForm.touched.password && stuForm.errors.password}</b>
                </div>
                <br />

                <button >submit</button>
                <ul>
                    {
                        student.map((a) => {
                            return (
                                <li>
                                    <h3>{a.firstname}</h3>
                                    <h3>{a.lastname}</h3>
                                    <h3>{a.age}</h3>
                                    <h3>{a.gender}</h3>
                                </li>
                            )
                        })
                    }
                </ul>

            </form>
        </div>
    )
}
export default Form
