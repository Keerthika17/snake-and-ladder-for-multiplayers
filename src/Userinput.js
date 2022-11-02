import React, { useState } from 'react'
import Getplayername from './Getplayername'
// import App from './App';
import './Userinput.css'
let userValue;
let playerValueContain;
export default function Userinput() {
    const [noofplayers, setNoofplayers] = useState()
    const [gettingUserName, setGettingUserName] = useState(false)
    const [hideScreen, setHideScreen] = useState("display")

    function getInput() {
        let playerObject = {}
        let playeremoji = ["👨‍🚀", "👩", "⛹️‍♂️", "🏄"]
        if (noofplayers <= 4) {
            userValue = Number(noofplayers)
            console.log(userValue)
            for (let i = 1; i <= userValue; i++) {
                playerObject[`Player${i}`] = 0
                playerObject[`Player${i} emoji`] = `${playeremoji[i - 1]}`
            }
            playerValueContain = playerObject
            console.log(playerValueContain)
            setGettingUserName(true)
            setHideScreen("invisible")
        }
        else {

            setNoofplayers("PLEASE ENTER BELOW 4")
        }
    }
    return (
        <div> 
        
            <div className={hideScreen}>
                
                <header id='use'>
                <div id="heading"><h1>🎲SNAKE LADDER GAME🐍</h1></div>
                    <div id="gif"><img src="https://media.tenor.com/KBNPB0oVi_oAAAAj/nat19-natural19.gif" alt="" /></div>
                    <h5 id='name'>ENTER THE NUMBER OF PLAYERS</h5>
                    <input type="number" onChange={(e) => { setNoofplayers(e.target.value) }} click here />

                    <p id='noplayers'>Number of Players: {noofplayers}</p>
                    <div>
                        <button onClick={getInput} > submit </button>
                    </div>

                </header>
            </div>
       
            <div className='change'>
                {gettingUserName ? <Getplayername /> : null}
            </div>
        
        </div>
    )
}
export { playerValueContain, userValue }