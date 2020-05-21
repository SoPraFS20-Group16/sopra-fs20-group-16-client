import React from "react";

export default function Settlement(props){

  return(
    <div
      className={'settlement'}
      style={{
        top: props.y,
        left: props.x,
        backgroundColor: props.colorSet
      }}
    />
  )
}