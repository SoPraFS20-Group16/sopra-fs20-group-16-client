import React from "react";
import {api} from "../../helpers/api";
/* eslint-disable */

export default function NewRoad(props){

  const requestBody = JSON.stringify({
    moveId: props.moveId
  });

  async function handler(){
    await api.put("/games/" + props.gameId, requestBody);

    return props.handler2;
  }





  // const [streetColor, setStreetColor] = React.useState("transparent");
  return (

    <button
      style={{
        position: "absolute",
        top: props.midY - 5,
        left: props.midX - 20,
        transform: props.rotation,
        fontSize: "0.5em",
        width: "40px",
        height: "10px",
        border: "1.5px dotted black",
        borderRadius: "10px",
        backgroundColor: props.color,
        opacity: 0.5,
      }}
      onClick={handler}

    />
  )
}