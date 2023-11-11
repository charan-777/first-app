import React from "react";
function Comp() {
    var [mystudents, setMystudents] = React.useState(['kavya', 'manisha', 'nasir', 'keshu', 'hemika', 'prasad', 'srinivas'])
    function add(){
      var newinp=document.getElementById("inp").value
      setMystudents([...mystudents,newinp])
    }
    function ascen(){
        var temp=[...mystudents]
        temp.sort()
        setMystudents([...temp])
    }
    function descen(){
        var temp=[...mystudents]
        temp.sort().reverse()
        setMystudents([...temp])
    }
    return (
        <div>
            <h1>React Students</h1>
            <input type="text" id="inp" />
            <button onClick={add}>Add student</button> <br />
            <button onClick={ascen}>Sort By Ascen</button>
            <button onClick={descen}>Sort By Descen</button>
            {
                mystudents.map((a) => {
                    return (
                        <li>{a}</li>
                    )
                })
            }
        </div>
    )
}
export default Comp