import React from 'react';

import Hexagon from "react-svg-hexagon";

export default function Hex(props) {


  return (
    <div style={{position: "absolute", left: props.x, top: props.y}}>
      <Hexagon
        side={50}
        stroke="black"
        strokeWidth={1}
        radius={5}
        render={({ClipPath, Polygon, Content, Svg}) => {
          return (
            <Svg>
              <ClipPath/>
              <Polygon/>
              <Content>
                <img
                  style={{height: 100}}
                  /* The background image of the Hexagon can be adjusted with the img tag */
                  src={props.img}
                  alt=""
                />


                <img
                  style={{
                    height: 50,
                    position: 'absolute',
                    width: 50,
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                    border: null
                  }}
                  /* The background image of the Hexagon can be adjusted with the img tag */
                  src={props.number}
                  alt=""
                />


              </Content>
            </Svg>
          );
        }}

      />
    </div>
  )

}
