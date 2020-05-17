import React from "react";

import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Wool from '../../views/graphics/wool.png'
import Brick from '../../views/graphics/brick.png'
import Ore from '../../views/graphics/ore.png'
import Knight from '../../views/graphics/knight.png'
import Monopoly from '../../views/graphics/monopoly.png'
import Victory from '../../views/graphics/victory.png'
import Plenty from '../../views/graphics/plenty.png'
import Road from '../../views/graphics/road.png'

export default function ResourceList(props){
  const imgSize = 40;
  return (
    <div className={'resourceDiv'}>
      <div className={'resourceItem'}>
        <p>{"  "}
          <img style={{height: imgSize}} src={Lumber} alt=""/> : {props.resources.LUMBER}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Grain} alt=""/> : {props.resources.GRAIN}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Wool} alt=""/> : {props.resources.WOOL}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Brick} alt=""/> : {props.resources.BRICK}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Ore} alt=""/> : {props.resources.ORE}
        </p>
      </div>

      <div className={'resourceItem'}>

        <p>{"  "}
          <img style={{height: imgSize}} src={Victory} alt=""/> : {props.devCards.VICTORYPOINT}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Knight} alt=""/> : {props.devCards.KNIGHT}
        </p>

        <p> {"  "}
          <img style={{height: imgSize}} src={Monopoly} alt=""/> : {props.devCards.MONOPOLYPROGRESS}
        </p>

        <p>{"  "}
          <img style={{height: imgSize}} src={Road} alt=""/> : {props.devCards.ROADPROGRESS}
        </p>

        <p>{"  "}
          <img style={{height: imgSize}} src={Plenty} alt=""/> : {props.devCards.PLENTYPROGRESS}
        </p>
      </div>

    </div>
  );
}
