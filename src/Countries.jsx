import React from "react";
import axios from "axios";
function Country() {
    var [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://restcountries.com/v3/all")
            .then((res) => {
                setCountries([...res.data])
            })
    },[])
    function abc(){
        setCountries([...countries].sort((a,b)=>a.population-b.population))
    }
    function bbc(){
        setCountries([...countries].sort((a,b)=>b.population-a.population))
    }
    function ccc(){
        var x=document.getElementById("d4").Value
        var ncountry=([...countries]).filter((c)=>c.name.toLowerCase().startsWith(x))
        setCountries([...countries.ncountry])
    }
      


    return (
        <div >
            <div>
                <h1 className="d2">COUNTRIES</h1>
            </div>
            <div className="d3">
            <button onClick={abc}><b>Ascending</b></button>
            <button onClick={bbc}> <b>Descending</b></button>
            <input id="d4" onKeyUp={()=>{ccc()}}  type="search" placeholder="search"/>
            </div>
            


            <ul className="list">
                {
                    countries.map((a) => {
                        return <li>
                            <h2> {a.name.common}</h2>
                            <img src={a.flags[0]} alt="" width={200} />
                            <h2>population:{a.population}</h2>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Country;