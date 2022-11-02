import React, { useState } from 'react'
import App from './App';
import { userValue } from './Userinput';
import './Gettingplayername.css'
let count = 1
let playernames = []
let playerNamestore = []
export default function Getplayername() {
    const [username, setUsername] = useState('')
    const [startGame, setSetGame] = useState(false)
    const[gamedisplay,setGamedisplay]=useState("gameon")

    function gettingPlayerName() {
        playernames.push(username)
        console.log(playernames)
        setUsername('')
        count++
        if (count === userValue + 1) {
            for (let i = 1; i <= userValue; i++) {
                playerNamestore.push({Player:(`Player${i}`),Name:playernames[i-1]})
                console.log(playerNamestore)
                // playerNamestore[`player${count}`] = playernames[i - 1]
                console.log(playerNamestore)

            }
            setSetGame(true)
            setGamedisplay("gameoff")
        }

    }
   

    return (
        <div>
            <div className={gamedisplay}>
            <header id="playernameheadercss"><br /> 
            <div id="nameheading"><h1>🎲SNAKE LADDER GAME🐍</h1></div>
            <div id="gifvalue"><img src="https://media.tenor.com/KBNPB0oVi_oAAAAj/nat19-natural19.gif" alt="" /></div>
            <h4 id="getname">ENTER YOUR NAME</h4>
            <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} /> <br />
            <div> <h4> {playerNamestore.map(n => <div>{n.Player} : {n.Name}</div>  )}</h4> </div>
            <button onClick={gettingPlayerName} id="function">SUBMIT</button><br />
           
          
            </header>
            </div>
            {startGame ? <App /> : null}
        </div>
    )
}
export{playerNamestore ,playernames}