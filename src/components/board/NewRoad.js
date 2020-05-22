import React from "react";
import {api} from "../../helpers/api";

export default function NewRoad(props){

  const requestBody = JSON.stringify({
    moveId: props.moveId
  });

  async function handler(){
    await api.put("/games/" + props.gameId, requestBody);

  }

  return (

    <button
      className={'newRoad'}
      style={{
        top: props.midY - 5,
        left: props.midX - 20,
        transform: props.rotation,
        backgroundColor: props.color,
      }}
      onClick={handler}

    />
  )
}