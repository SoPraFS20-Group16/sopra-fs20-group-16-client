import React from 'react';

import Hexagon from "react-svg-hexagon";

export default function Hex(props) {
  /*
  const images={
    HILL: "sdergt",

  };



  const numbers = {
    2: "../../views/graphics/numbers/2.png",
    3: "img2",
    4: "",
    5: "",
    6: "",


  };

   */



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
                    height: 40,
                    position: 'absolute',
                    width: 40,
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                    border: null,
                    borderRadius: 30
                  }}
                  /* The background image of the Hexagon can be adjusted with the img tag */
                  /*
                  src={images.props.number}

                   */
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
