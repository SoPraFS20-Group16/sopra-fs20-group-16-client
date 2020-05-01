import React from "react";
import { api, handleError } from "../../helpers/api";
export default function Settlement(props){
  const [color, setColor] = React.useState("red");

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
        border: "2px solid transparent",
        borderRadius: "10px",
        backgroundColor: color
      }}
      onClick={async () => await api.put("/games/" + this.props.match.params.id, requestBody)}
    />
  )
}