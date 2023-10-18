import React from "react";
import axios from "axios";
function Country() {
    var [loading,setLoading]=React.useState([])
    var [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://restcountries.com/v3/all")
            .then((res) => {
                setCountries([...res.data])
                setLoading(false)
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
                {
                    loading && ( <img width="1000px" src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />)
                }
               
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
                            <h3> {a.name.common}</h3>
                            <img className="photo" src={a.flags[0]} alt=""  />
                            <h3>population:{a.population}</h3>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Country;