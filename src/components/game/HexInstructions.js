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
  const hexSize = 40;
  const resourceSize = 32;
  const arrowSize = 30;
  return(
      <div style={{border: "2px solid black", borderRadius: "50px" ,textAlign: "center" , width: "24%", backgroundColor: "beige", display: "inline-block"}}>
      <p>
        <img style={{height: hexSize, transform: "rotate(90deg)", marginRight: "10px"}} src = {woodHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Lumber} alt=""/>
      </p>
      <p>
        <img style={{height: hexSize, transform: "rotate(90deg)", marginRight: "10px"}} src = {clayHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Brick} alt=""/>
      </p>

      <p>
        <img style={{height: hexSize, transform: "rotate(90deg)", marginRight: "10px"}} src = {wheatHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Grain} alt=""/>
      </p>

      <p>
        <img style={{height: hexSize, transform: "rotate(90deg)", marginRight: "10px"}} src = {oreHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Ore} alt=""/>
      </p>

      <p>
        <img style={{height: hexSize, transform: "rotate(90deg)", marginRight: "10px"}} src = {sheepHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={Wool} alt=""/>
      </p>

      <p>
        <img style={{height: hexSize, transform: "rotate(90deg)", marginRight: "10px"}} src = {desertHex} alt = ""/>
        <img style={{height: arrowSize}} src={Arrow} alt=""/>
        <img style={{height: resourceSize, marginLeft: "10px"}} src={robber} alt=""/>
      </p>
    </div>


  )
}