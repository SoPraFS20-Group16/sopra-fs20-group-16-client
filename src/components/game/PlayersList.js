import React from "react";
import './style.css'

export default function playersList(props) {

  return (
    <div className={'actionBox'} style={{padding:' 7px 13px'}}>

      <div className={'boxTitle'}>
        Players
      </div>


      <div style={{marginTop:'15px'}}>
        {props.players.map((player, i) =>
          <div style={{display:'flex'}} key={i}>
            <div className={'playerColor'} style={{backgroundColor: props.colors[player.userId]}}/>
            {player.username === props.currentPlayer.username ?
              <p><b>➢ {player.username}</b></p> : <p>{player.username}</p>}
          </div>
        )}
      </div>
    </div>
  )
}