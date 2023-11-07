import React from "react";
import axios from "axios";
function Drinks() {
    var [tails, setTails] = React.useState([])
    React.useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            .then((res, data) => {
                setTails(res.data)
                console.log(res)
            })
    }, [])
    console.log(tails)
   
        function search(){
            var s=document.getElementById("d2").value
            console.log(s)
            var temp=tails.drinks ?.filter((b)=>{
                return(b.strDrink.toLowerCase().startsWith(s))
                setTails([...temp])
            })
        }
   

    return (
        <div>
            <div className="header">
                <h3 >The Cocktails DB </h3>
                {/* <p className="hom">HOME</p>
                <p className="abt">ABOUT</p> */}
            </div><br /><br />

            <div className="secdiv">
                <h3 style={{ color: "grey" }}>Search for Your Favorite cocktail</h3>
                <input type="text" className="inp" id="d2" onKeyUp={search}/>
            </div><br />
            <h1 style={{ textAlign: "center" }}>cocktails</h1>
            <div className="main-div" >
                {
                    tails.drinks?.map((a) => {
                        return <div className="thrdiv" >
                            <img className="pic" src={a.strDrinkThumb} alt="" />
                            <div className="fdiv">
                                <h1>{a.strDrink}</h1>
                                <h4>{a.strGlass}</h4>
                                <p>{a.strAlcoholic}</p>
                                {/* <h2>{a.strCategory}</h2>  */}
                                <button className="btn">Details</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default Drinks