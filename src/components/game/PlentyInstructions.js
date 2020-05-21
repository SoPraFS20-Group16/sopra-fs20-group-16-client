import React from "react";
import Miner from '../../views/graphics/miner.png'
import Farmer from '../../views/graphics/farmer.png'
import LumberJack from '../../views/graphics/lumberjack.png'
import Arrow from '../../views/graphics/icons8-right-arrow-100.png'

import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Wool from '../../views/graphics/wool.png'
import Brick from '../../views/graphics/brick.png'
import Ore from '../../views/graphics/ore.png'



export default function PlentyInstructions(){
  const hexSize = 40;
  const arrowSize = 25;
  const resourceSize = 20;
  return(
    <div style={{border: "2px solid black", borderRadius: "50px" ,textAlign: "center" , padding: '20px 30px', backgroundColor: "beige", display: "inline-block"}}>
      <h3 style={{marginBottom: '20px'}}> <b>Plenty progress cards </b></h3>
      <p>
        <img style={{height: hexSize}} src={Miner} alt=""/>
        <img style={{height: arrowSize, marginLeft: '5px'}} src={Arrow} alt=""/>
        <t>Miner: 2x <img style={{height: resourceSize}} src={Ore} alt=""/> and 2x <img style={{height: resourceSize}} src={Brick} alt=""/> </t>
      </p>
      <p>
        <img style={{height:hexSize, marginLeft: '10px'}} src={Farmer} alt=""/>
        <img style={{height: arrowSize, marginLeft: '5px'}} src={Arrow} alt=""/>
        <t>Farmer: 2x <img style={{height: resourceSize}} src={Grain} alt=""/> and 2x<img style={{height: resourceSize}} src={Wool} alt=""/></t>
      </p>

      <p>
        <img style={{height:hexSize}} src={LumberJack} alt=""/>
        <img style={{height: arrowSize, marginLeft: '5px'}} src={Arrow} alt=""/>
        <t style={{marginRight: '25px'}}>Lumberjack: 5x <img style={{height: resourceSize}} src={Lumber} alt=""/> </t>
      </p>

    </div>


  )
}