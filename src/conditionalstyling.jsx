import React from "react";
function Student() {
    var [students, setStudents] = React.useState([
        {
            firstname: 'ravi',
            lastname: 'sastri',
            gender: 'male'
        },
        {
            firstname: 'sachin',
            lastname: 'tendulkar',
            gender: 'male'
        },
        {
            firstname: 'mithali',
            lastname: 'raj',
            gender: 'female'
        },
        {
            firstname: 'Rohit',
            lastname: 'Sharma',
            gender: 'male'
        },
        {
            firstname: 'Smriti',
            lastname: 'Mandhana',
            gender: 'female'
        },
        {
            firstname: 'Virat',
            lastname: 'Kohli',
            gender: 'male'
        },
    ])
    return (
        <div className="main">
            <table className="sec">
                {
                    students.map((a) => {
                        return (
                            <tr style={a.gender==="male"?{backgroundColor:"pink"}:{background:"skyblue"}}>
                                <td className="start">{a.firstname}</td>
                                <td className="middle">{a.lastname}</td>
                                <td className="last">{a.gender}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Student