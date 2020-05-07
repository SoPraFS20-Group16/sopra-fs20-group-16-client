import { api } from "../../helpers/api";
import React from "react";
import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Wool from '../../views/graphics/wool.png'
import Brick from '../../views/graphics/brick.png'
import Ore from '../../views/graphics/ore.png'

export default function Offer(props){
  const requestBody = JSON.stringify({
    moveId: props.moveId
  });


  const images = {
    LUMBER: Lumber,
    GRAIN: Grain,
    WOOL: Wool,
    BRICK: Brick,
    ORE: Ore
  };


  return(
    <p>
      <button
        className = 'offerButton'
        onClick = {async () => await api.put("/games/" + props.gameId, requestBody)}
      >

        4x <img style ={{maxHeight:'25px', maxWidth:'25px'}} src={images[props.give]} alt = ''/>
        for 1x <img style ={{maxHeight:'30px', maxWidth:'30px'}} src={images[props.receive]} alt = ''/>
      </button>
    </p>
  )
}