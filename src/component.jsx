import React from "react";
function Comp() {
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
    function sortbyfirstname(a) {
        var temp = ([...mystudents])
        temp.sort((a, b) => {
            if (a.firstname > b.firstname) {
                return 1
            }
            else {
                return -1
            }
        })
        setMystudents([...temp])
    }
    function sortbylastname(a) {
        var temp = ([...mystudents])
        temp.sort((a, b) => {
            if (a.lastname > b.lastname) {
                return 1
            }
            else {
                return -1
            }
        })
        setMystudents([...temp])
    }
    return (
        <div>
            <h1>React Students</h1>
            <table border="1px solid">
                <thead>
                    <th onClick={sortbyfirstname}>firstname</th>
                    <th onClick={sortbylastname}>lastname</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>city</th>
                    <th>salary</th>
                </thead>
                <tbody>
                    {
                        mystudents.map((a) => {
                            return (
                                <tr>
                                    <td>{a.firstname}</td>
                                    <td>{a.lastname}</td>
                                    <td>{a.age}</td>
                                    <td>{a.gender}</td>
                                    <td>{a.city}</td>
                                    <td>{a.salary}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Comp