import React from "react";
import './style.css'

export default function playersList(props) {

  return (
    <div className={'actionBox'} style={{padding:' 7px 13px'}}>
      <div style={{marginBottom:'7px'}}>
        <h5>
          Players
        </h5>
      </div>

      {props.players.map((player) =>
        <div style={{
          display:'flex',
        }}>
          <div className={'playerColor'} style={{backgroundColor: props.colors[player.userId]}}/>
          <p>{player.username}</p>
        </div>
      )}
    </div>
  )
}