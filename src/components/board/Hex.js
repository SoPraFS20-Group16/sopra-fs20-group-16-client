
import React from 'react';

import Hexagon from "react-svg-hexagon";

export default function Hex(props) {


    return(
      <div style={{position: "absolute", left: props.left, top: props.top}}>
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
                      src="https://img.favpng.com/25/12/24/clip-art-portable-network-graphics-image-palm-trees-graphic-design-png-favpng-MP57wk8JFHK61c8Ty8BX01pnG.jpg"
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
