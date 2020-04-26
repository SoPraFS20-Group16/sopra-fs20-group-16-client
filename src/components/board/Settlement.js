import React from "react";
export default function Settlement(props){
  const [color, setColor] = React.useState("transparent");
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
      onMouseEnter={() => setColor("cyan")}
      onMouseLeave={() => setColor("transparent")}
      onClick={() => setColor("red")}
    />
  )
}