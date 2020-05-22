import React from "react"
import {api} from "../../helpers/api";

export default function HexThiefSelector(props) {

  const requestBody = JSON.stringify({
    moveId: props.moveId
  });

  async function handler(){
    await api.put("/games/" + props.gameId, requestBody);
  }

  return (
    <button style={{
      position: "absolute",
      left: props.x + 43.30127,
      top: props.y + props.side,
      transform: "translate(-50%, -50%)",

      bottom: '33%',
      height: props.side*1.5,
      width: props.side*1.5,
      backgroundColor: 'rgba(50,150,50, 0.5)',
      borderRadius: 1000,
    }}
    onClick={handler}
    >
    </button>
  )
}

