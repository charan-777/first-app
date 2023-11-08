import React from "react";
import moment from 'moment'
function Article() {
    var [data, setData] = React.useState([
        {
            id: 1,
            title: 'the WET Codbase',
            date: new Date(2020, 9, 4),
            length: 11,
            snippet: `Come waste your time with me`,
        },
        {
            id: 2,
            title: 'goodby, clean code',
            date: new Date(2019, 10, 22),
            length: 5,
            snippet: `Let clean code guide you. Then let it go.`,
        },
        {
            id: 3,
            title: 'my decade in review',
            date: new Date(2018, 7, 11),
            length: 5,
            snippet: `A personal reflection.`,
        },
        {
            id: 4,
            title: 'what are the react team principles',
            date: new Date(2015, 5, 4),
            length: 5,
            snippet: `UI Before API.`,
        },
    ])
    return (
        <div>
            <div className="main">
            <h1>Over reacted</h1>
            {
                <i class="bi bi-toggle-on" style={{ fontSize: '40px' }} ></i>
            }
            {
                <i class="bi bi-toggle-off" style={{ fontSize: '40px' }} ></i>
            }
            </div>
            <div>
                {
                    data.map((a, i) => {
                        return (
                            <div className="sec">
                                <h2>{a.title}</h2>
                                <div>
                                    <span>{moment(a.date).format('dddd Do, YYYY')}</span>
                                    <span>{a.length} min read</span>
                                </div>
                                <p>{a.snippet}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Article