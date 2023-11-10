import React from "react";
function Courselist() {
    var [lists, setLists] = React.useState([
        {
            cname: 'PHP',
            trainer: 'Ramesh',
            cost: 20000
        },
        {
            cname: 'CCNA',
            trainer: 'Jayaram',
            cost: 40000
        },
        {
            cname: 'C++',
            trainer: 'Kavya',
            cost: 20000
        },
        {
            cname: 'Java',
            trainer: 'Venkat',
            cost: 30000
        },
    ])
    function Course(props){
        return (
          <div className="main">
            <h2>CourseName:{props.courseName}</h2>
            <h3>CourseTrainer:{props.trainer.toUpperCase()}</h3>
            <h3>CourseCost:Rs.{props.cost}</h3>
          </div>
        )
      }

    return (
        <div className="sec">
            {
                lists.map((a) => {
                    return (
                        <Course courseName={a.cname} trainer={a.trainer} cost={a.cost}></Course>
                    )
                })
            }
        </div>
    )
}
export default Courselist