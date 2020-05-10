import React from 'react';
import Hexagon from "react-svg-hexagon";
import woodHex from '../../views/graphics/biomes/woodHex.gif'
import clayHex from '../../views/graphics/biomes/clayHex.gif'
import wheatHex from '../../views/graphics/biomes/wheatHex.gif'
import oreHex from '../../views/graphics/biomes/oreHex.gif'
import desertHex from '../../views/graphics/biomes/desertHex.gif'
import sheepHex from '../../views/graphics/biomes/sheepHex.gif'
import outlaw from '../../views/graphics/outlaw.png'
import {api} from "../../helpers/api";

export default function Hex(props) {

  const tilesPics = {
    FIELD: wheatHex,
    FOREST: woodHex,
    MOUNTAIN: oreHex,
    DESERT: desertHex,
    PASTURE: sheepHex,
    HILL: clayHex,
  };

  return (

    <div
      style={{position: "absolute", left: props.x, top: props.y}}
    >

      <Hexagon

        side={50}
        stroke="rgb(235,232,160)"
        strokeWidth={7}
        radius={5}

        render={({ClipPath, Polygon, Content, Svg}) => {
          return (
            <Svg>
              <ClipPath/>
              <Polygon/>
              <Content>
                <img
                  src={tilesPics[props.type]}
                  alt={''}
                  style={{
                    width:'93%',
                    height:'93%',
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: '33%',
                    height: '30px',
                    width: '30px',
                    backgroundColor: 'rgb(235,232,160)',
                    verticalAlign: 'middle',
                    border: '2px black',
                    borderRadius: 30,
                  }}
                >
                  <div style={{
                    position:"absolute",
                    top:"10px",
                    left:"6px",
                    textAlign: 'center',
                    fontSize: '25px',
                    fontWeight: 'bold',
                  }}>
                    {props.number === 0 ? <img
                      src={outlaw}
                      alt={''}
                      style={{
                        width:'100%',
                        height:'100%',
                        top: "150",
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: "block"

                      }}
                    /> : props.number}
                  </div>
                </div>


              </Content>
            </Svg>
          );
        }}

      />
    </div>
  )
}
