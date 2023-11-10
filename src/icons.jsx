import React from "react";
function Icons() {
    var [icon, setIcon] = React.useState([
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
                icon.map((a) => {
                    return (
                        <div className="sec">
                        <div className="thrd">
                        <img src={a.gender==='male'?"https://img.freepik.com/free-vector/man-with-mustache_1308-41559.jpg?w=1060&t=st=1676127241~exp=1676127841~hmac=15c14450019f4f865554d64145accc0a8ae4c1561cb7f96685e18e849a69424c":"https://img.freepik.com/free-vector/girl-reading-while-drinking_1308-83464.jpg?w=1060&t=st=1676127273~exp=1676127873~hmac=8bae6e95e8643b9cab4c9aef5743a880d9d9e03df322ed927b0c103cdceb3106"} class="card-img-top" alt="..."  />
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
export default Icons