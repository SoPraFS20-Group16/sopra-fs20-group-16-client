import React from "react";
import './style.css'
import d1 from '../../views/graphics/dice/dice_1.png'
import d2 from '../../views/graphics/dice/dice_2.png'
import d3 from '../../views/graphics/dice/dice_3.png'
import d4 from '../../views/graphics/dice/dice_4.png'
import d5 from '../../views/graphics/dice/dice_5.png'
import d6 from '../../views/graphics/dice/dice_6.png'


export default class Dice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      dieList: [d1, d2, d3, d4, d5, d6],

    }
    this.state.result = props.result;
  }

  genNums() {
    const result = this.state.result;
    let dice1 = Math.floor(result / 2);
    let dice2 = result - dice1;

    // Create a "drifter" to make dice numbers more interesting and randomized
    let drifter;
    if(result >= 6 && result <= 8){drifter = 3.33}
    else if((result >= 4 && result <= 5) || (result >= 9 && result <= 10)){
      drifter = 2.22;
    }
    else {drifter = 1.11}

    let sign = 1;
    if(Math.random() <= 0.4){sign = -1;}

    let randomizer = sign * Math.floor(Math.random() * drifter);

    // Apply randomization to created dice values
    dice1 += randomizer;
    dice2 -= randomizer;

    console.log('dice: ' + dice1 + ' ' +  dice2)

    return {dice1: dice1, dice2: dice2}
  }

  render(){
  return (
    <div>
      {this.state.result !== 0 &&
        <div className={'diceBox'}>
          <img src={this.state.dieList[this.genNums().dice1 - 1]} alt={''} style={{border: '1px solid black', borderRadius: '5px'}}/>
          <img src={this.state.dieList[this.genNums().dice2 - 1]} alt={''} style={{border: '1px solid black', borderRadius: '5px'}}/>
        </div>
      }
    </div>
  );
  }
}