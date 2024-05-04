import React from "react";
import { useParams } from "react-router-dom";
import { useGetCountryDetailsByNameQuery } from "../../services/countries";
function CountryDetails() {
    var { cname } = useParams()
    var { data, isloading } = useGetCountryDetailsByNameQuery(cname)
    return (
        <div className="main">
            <h1>CountryDetails </h1>
            {
                data && data.map((country) => {
                    return (
                        <div className="mydiv">
                            <div style={{marginTop:"20px"}}>
                            <img src={country.flags[0]} alt="" style={{ width: "200px" }} />
                            </div>     
                            <div className="secdiv">
                            <h2>Name: {cname}</h2>
                            <h2>Capital: {country.capital}</h2>
                            <h2>population: {country.population}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CountryDetails