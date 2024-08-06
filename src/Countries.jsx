import React from "react";
import axios from "axios";

function Country() {
    const [loading, setLoading] = React.useState(true);
    const [countries, setCountries] = React.useState([]);
    const [filteredCountries, setFilteredCountries] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://restcountries.com/v3/all")
            .then((res) => {
                setCountries(res.data);
                setFilteredCountries(res.data);
                setLoading(false);
            });
    }, []);

    function abc() {
        setFilteredCountries([...filteredCountries].sort((a, b) => a.population - b.population));
    }

    function bbc() {
        setFilteredCountries([...filteredCountries].sort((a, b) => b.population - a.population));
    }

    function ccc() {
        const x = document.getElementById("d4").value.toLowerCase();
        const ncountry = countries.filter((c) => c.name.common.toLowerCase().startsWith(x));
        setFilteredCountries(ncountry);
    }

    return (
        <div>
            <div>
                <h1 className="d2">COUNTRIES</h1>
                {loading && (
                    <img width="1000px" src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="Loading" />
                )}
            </div>
            <div className="d3">
                <button onClick={abc}><b>Ascending</b></button>
                <button onClick={bbc}><b>Descending</b></button>
                <input id="d4" onKeyUp={ccc} type="search" placeholder="search" />
            </div>
            <ul className="list">
                {filteredCountries.map((a) => (
                    <li key={a.cca3}>
                        <h3>{a.name.common}</h3>
                        <img className="photo" src={a.flags[0]} alt={a.name.common} />
                        <h3>population: {a.population}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Country;

