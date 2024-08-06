import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
function Countries(){
    var [countries,setCountries]=useState([])
   useEffect(()=>{
    axios.get("https://restcountries.com/v3/all").then((res)=>{
        setCountries(res.data)
        })
   },[])
    return( 
        <div className="mybox">
           <h1> Welcome to Countries</h1> 
           <div style={{display:"flex"}}>
            <div style={{width:"100%"}}>
            <ul id="countries">
           {
            countries.length>0 && countries.map((country)=>{
                return<li>
                    {country.name.common}
                    <img src={country.flags[0]}  alt="" />
                    <Link to={"/Countries/CountryDetails/"+country.name.common} state={country}>Read More</Link>
                </li>
            })
           }
           </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
           </div>
          
            </div>
    )
}
export default Countries