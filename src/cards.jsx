import React from "react";
function Cards() {
    var [card, setCards] = React.useState([
        {
            firstname: 'ravi',
            lastname: 'sastri',
            gender: 'male'
        },
        {
            firstname: 'sachin',
            lastname: 'tendulkar',
            gender: 'male'
        },
        {
            firstname: 'mithali',
            lastname: 'raj',
            gender: 'female'
        },
        {
            firstname: 'Rohit',
            lastname: 'Sharma',
            gender: 'male'
        },
        {
            firstname: 'Smriti',
            lastname: 'Mandhana',
            gender: 'female'
        },
        {
            firstname: 'Virat',
            lastname: 'Kohli',
            gender: 'male'
        },
        {
            firstname: 'Shefali',
            lastname: 'Verma',
            gender: 'female'
        },
        {
            firstname: 'Surya',
            lastname: 'Kumar',
            gender: 'male'
        },
    ])
    return (
        <div className="main">
            {
                card.map((a) => {
                    return (
                        <div className="sec">
                        <div className="thrd">
                             {a.gender==='male' && <i class="bi bi-gender-male h1" style={{fontSize:"30px"}}></i>}
                             {a.gender==='female' && <i class="bi bi-gender-female h1" style={{fontSize:"30px"}}></i>}
                            <div>
                                <b>{a.firstname.toUpperCase() + "" + a.lastname.toUpperCase()}</b>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Cards