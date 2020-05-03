import React from "react";
import { api } from "../../helpers/api";

export default function Settlement(props){

  const [color, setColor] = React.useState(props.colorSet);

  const requestBody = JSON.stringify({
    moveId: props.moveId
  });

  return(
    <div
      style={{
        position: "absolute",
        top: props.y,
        left: props.x,
        transform: "translate(-50%, -50%)",
        fontSize: "0.5em",
        width: "20px",
        height: "20px",
        border: "1.5px solid black",
        borderRadius: "10px",
        backgroundColor: color
      }}
      onClick={props.isSetBuilt ? null : async () => await api.put("/games/" + props.gameId, requestBody)}
    />
  )
}