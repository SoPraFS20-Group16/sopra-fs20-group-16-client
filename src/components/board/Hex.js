import React from 'react';

import Hexagon from "react-svg-hexagon";

export default function Hex(props) {
  /*
  const images={
    HILL: "sdergt",

  };

  const numbers = {

  };

   */

  return (

    <div style={{position: "absolute", left: props.x, top: props.y}}>

      <Hexagon
        {...props.number}

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
                    height: 40,
                    position: 'absolute',
                    width: 40,
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                    border: null,
                    borderRadius: 30
                  }}
                  /* The background image of the Hexagon can be adjusted with the img tag */
                  src={props.numberImg}
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
