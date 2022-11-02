import React from 'react'
import Player from './playerProp'
const Props = ( {cellno,iconvalue,to,move , value }) => {
  let players=[]
  for(let i in value){
    if(value[i]==='true'){
      players.push([i])
    }
  }
  return (
    <div>
        <h1>{cellno}</h1>
        <h1>{to}</h1>
       <h2 style={{color:"white" }}> {players.map(n=><Player player={n} key={n}/>)}</h2>
        <h1>{iconvalue}</h1>
        <h1>{move}</h1>
        
    </div>
  )
} 

export default Props;