import React from "react";
import { api } from "../../helpers/api";

export default function NewSettlement(props){

  const requestBody = JSON.stringify({
    moveId: props.moveId
  });

  async function handler(){
    await api.put("/games/" + props.gameId, requestBody);
  }

  return(
    <button
      className={'newSettlement'}
      style={{
        top: props.y,
        left: props.x,
        backgroundColor: props.colorSet,
      }}
      onClick={handler}
    />
  )
}