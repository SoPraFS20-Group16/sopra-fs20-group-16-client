import React from "react";
import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Wool from '../../views/graphics/wool.png'
import Brick from '../../views/graphics/brick.png'
import Ore from '../../views/graphics/ore.png'
import woodHex from '../../views/graphics/biomes/woodHex.gif'
import clayHex from '../../views/graphics/biomes/clayHex.gif'
import wheatHex from '../../views/graphics/biomes/wheatHex.gif'
import oreHex from '../../views/graphics/biomes/oreHex.gif'
import desertHex from '../../views/graphics/biomes/desertHex.gif'
import sheepHex from '../../views/graphics/biomes/sheepHex.gif'
import robber from '../../views/graphics/bandit.png'
import Arrow from '../../views/graphics/icons8-right-arrow-100.png'



export default function HexInstructions(){
  const hexSize = 60;
  const resourceSize = 52;
  const arrowSize = 30;
  return(
      <div style={{border: "2px solid black", borderRadius: "50px" ,textAlign: "center" , padding: '20px 30px', backgroundColor: "beige", display: "inline-block"}}>

        <h3> <b>Resource given from each tile </b></h3>
      <p>
        <img className={'hexInstruction'} style={{height: hexSize}} src = {woodHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Lumber} alt=""/>
      </p>
      <p>
        <img className={'hexInstruction'} style={{height: hexSize}} src = {clayHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Brick} alt=""/>
      </p>

      <p>
        <img className={'hexInstruction'} style={{height: hexSize}} src = {wheatHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Grain} alt=""/>
      </p>

      <p>
        <img className={'hexInstruction'} style={{height: hexSize}} src = {oreHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Ore} alt=""/>
      </p>

      <p>
        <img className={'hexInstruction'} style={{height: hexSize}} src = {sheepHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Wool} alt=""/>
      </p>

      <p>
        <img className={'hexInstruction'} style={{height: hexSize}} src = {desertHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={robber} alt=""/>
      </p>
    </div>


  )
}