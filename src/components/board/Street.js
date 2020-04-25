import React from "react";
export default function Street(props){
  const [streetColor, setStreetColor] = React.useState("pink");
  return(
    <div
      style={{
        position: "absolute",
        top: props.y,
        left: props.x,
        /*serve ad assicurarsi che gira a partire dalla punta e non dal mezzo*/
        transformOrigin: "0% 0%",
        transform: props.rotation,
        fontSize: "0.5em",
        width: "40px",
        height: "10px",
        border: "2px solid black",
        borderRadius: "10px",
        backgroundColor: streetColor
      }}
      onClick={() => alert("placeholder for ship clicked")}
      onMouseEnter={() => setStreetColor("yellow")}
      onMouseLeave={() => setStreetColor("pink")}
    />
  )
}