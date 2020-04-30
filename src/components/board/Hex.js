import React from 'react';
import Hexagon from "react-svg-hexagon";
import styled from "styled-components";

const BiomePic = styled.div`
height: 100;
background-color: beige;
`

export default function Hex(props) {

  const tilesPics = {
    FIELD: '../../views/graphics/biomes/wheatHex.gif',
    FOREST: '../../views/graphics/biomes/woodHex.gif',
    MOUNTAIN: '../../views/graphics/biomes/oreHex.gif',
    DESERT: '../../views/graphics/biomes/desertHex.gif',
    PASTURE: '../../views/graphics/biomes/sheepHex.gif',
    HILL: '../../views/graphics/biomes/clayHex.gif',
  }

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
                <div
                  style={{
                    height: '100',
                    //backgroundImage: `url(${tilesPics[props.type]}) !important`
                    backgroundImage: "url('../../views/graphics/biomes/wheatHex.gif') !important",
                  }}
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
