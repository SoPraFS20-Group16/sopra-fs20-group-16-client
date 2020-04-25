import React from "react";

export default function Settlement(props){
  const [color, setColor] = React.useState("red");
  return(
    <div
      style={{
        position: "absolute",
        top: props.y-6,
        left: props.x-6,
        fontSize: "0.5em",
        width: "20px",
        height: "20px",
        border: "2px solid black",
        borderRadius: "10px",
        backgroundColor: color
      }}
      onClick={() => alert("placeholder for settlement clicked")}
      onMouseEnter={() => setColor("yellow")}
      onMouseLeave={() => setColor("red")}
    />
  )
}