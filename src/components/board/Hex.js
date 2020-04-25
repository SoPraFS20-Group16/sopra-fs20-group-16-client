
import React from 'react';

import Hexagon from "react-svg-hexagon";

export default class Hex extends React.Component{

  constructor(props) {
    super();

    this.state ={
    }
  }


    render() {
      return (


        <div style={{position: "absolute", left: this.props.x, top: this.props.y}}>

          <Hexagon
            {...this.props.number}

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
                      src={this.props.img}
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
                      src={this.props.numberImg}
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

}
