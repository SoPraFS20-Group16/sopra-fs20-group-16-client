import { api } from "../../helpers/api";
import React from "react";

export default function NewCity(props){

  const requestBody = JSON.stringify({
    moveId: props.moveId
  });

  return(
    <button
      className={'newCity'}
      style={{
        top: props.y,
        left: props.x,
        backgroundColor: props.colorSet,
      }}
      onClick={props.isBuilt ? null : async () => await api.put("/games/" + props.gameId, requestBody)}
    />
  )
}