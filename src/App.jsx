import logo from './logo.svg';
import React from 'react';
import './App.css';
import IplTeam from './iplteam';
function App() {
  var [allteams, setAllteams] = React.useState([
    {
        teamname: 'Mumbai Indians',
        players: [
            'Rohit',
            'surya',
            'kishan',
            'bhumra',
            'david'
        ]
    },
    {
        teamname: 'Royal Challengers Bengaluru',
        players: [
            'Faf',
            'Virat',
            'DK',
            'Maxi',
            'Siraj'
        ]
    },
    {
        teamname: 'Sunrisers Hyderabad',
        players: [
            'Kane Williamson',
            'Manish',
            'Bhuvi',
            'Warner',
            'Karan'
        ]
    },
    {
        teamname: 'Chennai Super Kings',
        players: [
            'Dhoni',
            'Raina',
            'Jadeja',
            'Rayudu',
            'Ben Stokes'
        ]
    }
])
return (
    <div className='mybox'>
        <h1>Welcome to Edupoly React</h1>
        {
            allteams.map((team)=>{
                return <IplTeam team={team.players} tname={team.teamname}></IplTeam>
            })
        }

    </div>
)
}

export default App;
