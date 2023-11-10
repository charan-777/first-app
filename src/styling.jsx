import React from "react";
function Students(){
    var [student, setStudent]=React.useState( [
        {
          firstname:'ravi',
          lastname:'sastri',
          gender:'male'
        },
        {
          firstname:'sachin',
          lastname:'tendulkar',
          gender:'male'
        },
        {
          firstname:'mithali',
          lastname:'raj',
          gender:'female'
        },
        {
          firstname:'Rohit',
          lastname:'Sharma',
          gender:'male'
        },
        {
          firstname:'Smriti',
          lastname:'Mandhana',
          gender:'female'
        },
        {
          firstname:'Virat',
          lastname:'Kohli',
          gender:'male'
        },
      ]);
    return(
        <div className="main">
        <table className="tb">
            <thead >
                <th>firstname</th>
                <th>lastname</th>
                <th>gender</th>
            </thead>
            <tbody>
            {
                student.map((a)=>{
                    return(
                        <tr style={a.gender==='male'?{backgroundColor:'skyblue'}:{backgroundColor:'pink'}}>
                            <td>{a.firstname}</td>
                            <td>{a.lastname}</td>
                            <td>{a.gender}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            
        </table>
        </div>
    )
}
export default Students