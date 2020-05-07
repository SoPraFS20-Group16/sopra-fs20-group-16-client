import { api } from "../../helpers/api";
import React from "react";

export default function NewCity(props){

  const requestBody = JSON.stringify({
    moveId: props.moveId
  });

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
        backgroundColor: props.colorSet,
      }}
      onClick={props.isBuilt ? null : async () => await api.put("/games/" + props.gameId, requestBody)}
    />
  )
}