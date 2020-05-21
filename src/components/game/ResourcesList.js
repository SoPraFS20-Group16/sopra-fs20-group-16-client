import React from "react";
import ReactTooltip from "react-tooltip";

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
      <ReactTooltip type={'light'} delayShow={'180'}/>
      <div className={'resourceCol'}>
        <div data-tip={'Lumber'}>
          <img style={{height: imgSize}} src={Lumber} alt=""/> : {props.resources.LUMBER}
        </div>

        <div data-tip={'Grain'}>
          <img style={{height: imgSize}} src={Grain} alt=""/> : {props.resources.GRAIN}
        </div>

        <div data-tip={'Wool'}>
          <img style={{height: imgSize}} src={Wool} alt=""/> : {props.resources.WOOL}
        </div>

        <div data-tip={'Brick'}>
          <img style={{height: imgSize}} src={Brick} alt=""/> : {props.resources.BRICK}
        </div>

        <div data-tip={'Ore'}>
          <img style={{height: imgSize}} src={Ore} alt=""/> : {props.resources.ORE}
        </div>
      </div>

      <div className={'resourceCol'}>

        <div data-tip={'Victory point card'}>
          <img style={{height: imgSize}} src={Victory} alt=""/> : {props.devCards.VICTORYPOINT}
        </div>

        <div data-tip={'Knight card'}>
          <img style={{height: imgSize}} src={Knight} alt=""/> : {props.devCards.KNIGHT}
        </div>

        <div data-tip={'Monopoly card'}>
          <img style={{height: imgSize}} src={Monopoly} alt=""/> : {props.devCards.MONOPOLYPROGRESS}
        </div>

        <div data-tip={'Road progress card'}>
          <img style={{height: imgSize}} src={Road} alt=""/> : {props.devCards.ROADPROGRESS}
        </div>

        <div data-tip={'Plenty progress card'}>
          <img style={{height: imgSize}} src={Plenty} alt=""/> : {props.devCards.PLENTYPROGRESS}
        </div>
      </div>

    </div>
  );
}
