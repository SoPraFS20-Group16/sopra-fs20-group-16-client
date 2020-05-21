import React from "react";

export default function Road(props){
  // quando const [streetColor, setStreetColor] = React.useState("transparent");
  return (

    <div
      className={'road'}
      style={{
        top: props.midY - 5,
        left: props.midX - 20,
        transform: props.rotation,
        backgroundColor: props.color
      }}
    />
  )
}
