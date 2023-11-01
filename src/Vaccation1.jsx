import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Tours() {
    var [tour, setTour] = React.useState([]);
    var [loading,setLoading]=React.useState(true);
    
    var displayname;
    var [displayflag, setdisplayflag] =React.useState(true);
    var [displayname, setdisplayname] =React.useState("Readmore...");


    React.useEffect(() => {
        axios.get("https://course-api.com/react-tours-project")
            .then((res, data) => {
                setTour(res.data)
                setLoading(false)
            })
    }, []);

    function notintrested(i){
        var temp=([...tour])
        temp.splice(i,1)
        setTour([...temp])
    }
    
    function readmore(i){
        displayflag = !displayflag;
        setdisplayflag(displayflag);

        displayname = displayflag ? "Readmore..." :  "showless...";
        setdisplayname(displayname);
        
        var z =  document.getElementById(i);
        z.innerHTML = displayname;
        

        var temp=([...tour])
        temp[i].flag=!temp[i].flag
        setTour([...temp]);

        
    }
   
    return (
        <div className="mybox">
            <center >
                <h1>OUR TOURS</h1>
                <hr className="line" />
                {
                    loading && (<h1>Loading...</h1>)
                }
            </center>

            {
                tour.map((place, i) => {
                    return <div  style={{backgroundColor:"white",margin:"20px" ,width:"500px",marginLeft:"270px"}} >
                        <center>
                                <img src={place.image} style={{width:"500px" ,height:"250px" }}   alt="" />
                                <div >
                                <p className="name">
                                    {
                                        <b>{place.name}</b>
                                    }
                                </p>
                                <p className="price">
                                    
                                      <b class="bi bi-currency-dollar">{place.price}</b> 
                                    
                                </p>
                                {/* <p>
                                    {
                                        place.info
                                    }
                                </p> */}
                                <p>
                                    {
                                        place.flag ? place.info : place.info.slice(0,300)
                                    }
                                </p>
                                <div id={i} onClick={()=>{readmore(i)}} style={{color:"lightsalmon",cursor:"pointer"}}>Readmore...</div> <br /> <br />
                                <button onClick={()=>{notintrested(i)}} >Not Intrested</button>
                            </div>
                        </center>
                    </div>
                })
            }
        </div>
    )
}
export default Tours