import React from "react";
import './style.css'
import d1 from '../../views/graphics/dice/dice_1.png'
import d2 from '../../views/graphics/dice/dice_2.png'
import d3 from '../../views/graphics/dice/dice_3.png'
import d4 from '../../views/graphics/dice/dice_4.png'
import d5 from '../../views/graphics/dice/dice_5.png'
import d6 from '../../views/graphics/dice/dice_6.png'


export default function dice(props) {

  const dieList = [d1, d2, d3, d4, d5, d6];
  let dice1 = Math.floor(props.result / 2);
  let dice2 = props.result - dice1;


  return(
    <div className={'diceBox'}>
      <img src={dieList[dice1 - 1]} alt={''} style={{border:'1px solid black', borderRadius:'5px'}} />
      <img src={dieList[dice2 - 1]} alt={''} style={{border:'1px solid black', borderRadius:'5px'}} />
    </div>
)
}