import React from "react";
function Box(){
    var [techs,setTechs]=React.useState([])
    function handleTechs(e){
        if (e.target.checked===false){
            var temp=([...techs])
            var i=temp.indexOf(e.target.value)
            temp.splice(i,1)
            setTechs([...temp])
        }
        else{
            setTechs([...techs,e.target.value])
        }
    }
    return(
        <div className="main">
             <input type="checkbox" onChange={handleTechs} value="react"/>:ReactJS<br/>
            <input type="checkbox" onChange={handleTechs} value="angualr"/>:Angular<br/>
            <input type="checkbox" onChange={handleTechs} value="nodejs"/>:Nodejs<br/>
            <input type="checkbox" onChange={handleTechs} value="express"/>:Express<br/>
            <input type="checkbox" onChange={handleTechs} value="mongo"/>:Mongodb<br/>
            <input type="checkbox" onChange={handleTechs} value="mongoose"/>:Mongoose<br/>
            <input type="checkbox" onChange={handleTechs} value="mysql"/>:MySql<br/>
            <ul>
                {
                    techs.map((a)=>{
                        return <li>{a}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Box