import React from "react";

export default function City(props){

  return(
    <div
      className={'city'}
      style={{
        top: props.y,
        left: props.x,
        backgroundColor: props.colorSet
      }}

    />
  )
}