import React from "react";
function Array(){
    var [players,setPlayers]=React.useState( [
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
      function sortfn(keys,order){
        var temp=([...players])
        temp.sort((a,b)=>{
            if(order==="asc"){
            if(a[keys]>b[keys]){
                return 1
            }
            else{
                return-1
            }
        }
        if(order==="dsc"){
            if (a[keys]>b[keys]) {
                return -1
            }
            else{
                return 1
            }
        }
        })
        setPlayers([...temp])
      }
    
    return(
        <div className="main">
            <div className="sec">
            <h1>Students</h1>
            <input type="radio" onClick={()=>{sortfn("firstname","asc")}}/>:sorting by Firstname(A-Z)
            <input type="radio"  onClick={()=>{sortfn("firstname","dsc")}}/>:sorting by Firstname(Z-A) <br />
            <input type="radio"  onClick={()=>{sortfn("lastname","asc")}}/>:sorting by Lastname(A-Z)
            <input type="radio"  onClick={()=>{sortfn("lastname","dsc")}}/>:sorting by Lastname(Z-A) <br />
            <input type="radio"  onClick={()=>{sortfn("gender","asc")}}/>:sorting by Gender(A-Z)
            <input type="radio"  onClick={()=>{sortfn("gender","dsc")}}/>:sorting by Gender(Z-A)
            </div>
            <br />
            {
                <table border="1px solid" width="100%">
                    <thead>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Gender</th>
                    </thead>
                   <tbody>
                    {
                        players.map((a)=>{
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
export default Array