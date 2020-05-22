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

  async function chooseResource(e){
    await api.put("/games/" + props.gameId, requestBody);
    props.onClose();

  }


  return(
    <p>
      <button
        className = 'offerButton'
        onClick = {(e) => {chooseResource(e)}}
      >

        <t style={{fontSize:'18px'}}> 4x <img style ={{maxHeight:'30px', maxWidth:'30px', marginLeft:'3px', marginRight: '5px'}} src={images[props.give]} alt = ''/>
          for  1x <img style ={{maxHeight:'30px', maxWidth:'30px', marginLeft:'3px'}} src={images[props.receive]} alt = ''/></t>
      </button>
    </p>
  )
}