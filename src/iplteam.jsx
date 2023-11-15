import React from "react"

function IplTeam(props) {
    return (
        <div className="main">
                <h1>{props.tname}</h1>
                {
                    props.team.map((players) => {
                        return (
                            <li>{players}</li>
                        )
                    })
                }
        </div>
    )
}
export default IplTeam