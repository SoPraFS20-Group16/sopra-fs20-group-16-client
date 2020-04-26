import React from "react";
export default function Road(props){

  const [streetColor, setStreetColor] = React.useState("transparent");
  return(

    <div
      style={{
        position: "absolute",
        top: props.midY - 5,
        left: props.midX - 20,
        transform: props.rotation,
        //transform: "translate(-50%, -50%)",
        fontSize: "0.5em",
        width: "40px",
        height: "10px",
        border: "2px solid transparent",
        borderRadius: "10px",
        backgroundColor: streetColor
      }}
      onMouseEnter={() => setStreetColor("cyan")}
      onMouseLeave={() => setStreetColor("transparent")}
      onClick={() => setStreetColor("blue")}
    />
  )
}