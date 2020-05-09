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
          <div style={{
            height:'15px',
            width:'15px',
            backgroundColor: props.colors[player.userId],
            border: '0.5px solid black',
            borderRadius:'10px',
            marginRight:'7px',
            position: 'relative',
            top: '-6px'
          }}/>
          <p>{player.username}</p>
        </div>
      )}
    </div>
  )
}