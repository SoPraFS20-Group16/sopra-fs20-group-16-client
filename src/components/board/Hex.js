import React from 'react';
import Hexagon from "react-svg-hexagon";
import woodHex from '../../views/graphics/biomes/woodHex.gif'
import clayHex from '../../views/graphics/biomes/clayHex.gif'
import wheatHex from '../../views/graphics/biomes/wheatHex.gif'
import oreHex from '../../views/graphics/biomes/oreHex.gif'
import desertHex from '../../views/graphics/biomes/desertHex.gif'
import sheepHex from '../../views/graphics/biomes/sheepHex.gif'
import robber from '../../views/graphics/bandit.png'

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

                <div className={'hex'}>
                  <div className={'hexCircle'}>
                    {props.isRobber ?
                      <img className={'robberImage'} src={robber} alt={''}/> :
                      <p className={'number'}>
                        {props.number}
                      </p>}
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
