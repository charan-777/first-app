import React from "react";
function Header(){
    var [students,setStudents] = React.useState(
        [
          {
            firstname:'Ravi',
            lastname:'Sastri',
            gender:'male'
          },
          {
            firstname:'Sachin',
            lastname:'Tendulkar',
            gender:'male'
          },
          {
            firstname:'Mithali',
            lastname:'Raj',
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
        function sortStudents(keys,order){
            var temp=([...students])
            temp.sort((a,b)=>{
                if(order==="asc"){
                    if(a[keys]>b[keys]){
                        return 1
                    }
                    else{
                        return -1
                    }
                }
            })
            setStudents([...temp])
        }
    return(
        <div className="main">
            <h1>Students</h1>
            {
                <table border="2px solid" width="100%">
                    <thead>
                        <th onClick={()=>{sortStudents('firstname','asc')}}>Firstname</th>
                        <th onClick={()=>{sortStudents('lastname','asc')}}>Lastname</th>
                        <th onClick={()=>{sortStudents('gender','asc')}}>Gender</th>
                    </thead>
                    <tbody>
                        {
                            students.map((a)=>{
                                return <tr>
                                    <td>{a.firstname}</td>
                                    <td>{a.lastname}</td>
                                    <td>{a.gender}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            }
        </div>
    )
}
export default Header