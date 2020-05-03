import React from "react";

export default function AvatarCircle(props) {
  return (
    <div
      className={["circle-crop", props.className].join(" ")}
      style={{
        backgroundImage: `url(${props.avatarUrl})`,
        width: props.size,
        height: props.size
      }}
    />
  );
}
