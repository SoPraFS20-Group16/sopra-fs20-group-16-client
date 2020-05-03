import React from "react";
import { api } from "../../helpers/api";

export default function NewSettlement(props){

  const requestBody = JSON.stringify({
    moveId: props.moveId
  });

  async function handler(){
    await api.put("/games/" + props.gameId, requestBody);

    return props.handler2;
  }

  return(
    <button
      style={{
        position: "absolute",
        top: props.y,
        left: props.x,
        transform: "translate(-50%, -50%)",
        fontSize: "0.5em",
        width: "20px",
        height: "20px",
        border: "1.5px dotted black",
        borderRadius: "10px",
        backgroundColor: props.colorSet,
        opacity: 0.5,
      }}
      onClick={handler}
    />
  )
}