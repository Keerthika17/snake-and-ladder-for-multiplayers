import React, { useState } from 'react'
import emptyArray from './GridData';
import Props from './BoardData';
import './Snakeladderboard.css';
//  import Userinput from './Userinput'
import { playerValueContain, userValue } from './Userinput'
import { playerNamestore} from './Getplayername'
let count = 1
const App = () => {
  const [playerposition, setPlayerposition] = useState(playerValueContain)
  const [winner, setWinner] = useState("")
  const [whichPlayer, setWhichPlayer] = useState("PLAYER TURN")
  const [playerCurrentPosition, setPlayerCurrentPosition] = useState("CURRNTPOSITION")
  let randomValue = Math.floor(Math.random() * 6) + 1
  function playerMove() {

    console.log(playerposition[`player${count}`])
    if (playerposition[`Player${count}`] + randomValue <= 100) {
      emptyArray.forEach(element => {
        if (element.id === playerposition[`Player${count}`]) {
          element.players[`Player${count}`] = ''
        }
      })
      emptyArray.forEach(element => {
        if (element.id === playerposition[`Player${count}`] + randomValue) {
          console.log("randomValue", randomValue)
          if (element.tomove !== '') {
            emptyArray.forEach(no => {

              if (element.tomove === no.id) {
                no.players[`Player${count}`] = 'true'

                setPlayerposition({ ...playerposition, [`Player${count}`]: no.id })
                setWhichPlayer([`Player${count} TURN`])
                setPlayerCurrentPosition(` Player${count} CurrentPosition ${element.id}`)
                
              }
            });
          }
          else {
            element.players[`Player${count}`] = 'true'
            setPlayerposition({ ...playerposition, [`Player${count}`]: element.id })
            setWhichPlayer([`Player${count} TURN`])
            setPlayerCurrentPosition(`Player${count} CurrentPosition  ${element.id}`)
            
          }

          if (playerposition[`Player${count}`] + randomValue === 100) {
            setWinner(`Player${count} is the winner🏆`)
          }
        }
      });
    }

    count++
    if (count === userValue + 1) {
      count = 1
    }

  }
  function restart() {
    window.location.reload(false)
  }

  console.log(playerValueContain)

  return (
    <div>
      <div className='main'>
        <header className='mainheader'>
        <h2 className='dice'> DICE :{randomValue}</h2>
           <span><img src="https://www.kibrispdr.org/data/1760/dice-gif-10.gif" alt=""  id='diceimage'/></span>
          <div>  <h4 id='playerturn'>{whichPlayer}</h4></div>
          <h4 id='currentposition'>{playerCurrentPosition}</h4>
          <div  > <button   className="movebutton"onClick={playerMove}>START</button><br /></div>
          <div id='playername'> {playerNamestore.map(n => <div>{n.Player} : {n.Name}</div>  )} </div>
          <div><h1 id='winner'>{winner}</h1></div>
          
          <button onClick={restart} id="restart"> restart</button>
         
        </header>

        <div className='grid'> {emptyArray.map(no => <div className=" gridtable"> <Props cellno={no.id} iconvalue={no.icon} move={no.tomove} value={no.players} key={no.id} /></div>)}</div>

      </div>
    </div>
  )
}
export default App;