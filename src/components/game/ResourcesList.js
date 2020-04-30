import React from "react";

import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Wool from '../../views/graphics/wool.png'
import Brick from '../../views/graphics/brick.png'
import Ore from '../../views/graphics/ore.png'
import Knight from '../../views/graphics/knight.png'
import Monopoly from '../../views/graphics/monopoly.png'
import Victory from '../../views/graphics/victory.png'

export default function ResourceList(props){
  const imgSize = 50;
  return (
    <div className={'resourceDiv'}>
      <div className={'resourceItem'}>
        <p>{"  "}
          <img style={{height: imgSize}} src={Lumber} alt=""/> : {props.numLumber}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Grain} alt=""/> : {props.numGrain}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Wool} alt=""/> : {props.numWool}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Brick} alt=""/> : {props.numBrick}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Ore} alt=""/> : {props.numOre}
        </p>
      </div>

      <div className={'resourceItem'}>
        <p> {"  "}
          <img style={{height: imgSize}} src={Knight} alt=""/> : {props.numKnight}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Monopoly} alt=""/> : {props.numMonopoly}
        </p>

        <p>{"  "}
          <img style={{height: imgSize}} src={Victory} alt=""/> : {props.numVictory}
        </p>
      </div>

    </div>
  );
}
