import React from "react";
import { api } from "../../helpers/api";

export default function NewSettlement(props){

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
        border: "2px solid transparent",
        borderRadius: "10px",
        backgroundColor: props.colorSet
      }}
      onClick={props.isSetBuilt ? null : async () => await api.put("/games/" + props.gameId, requestBody)}
    />
  )
}