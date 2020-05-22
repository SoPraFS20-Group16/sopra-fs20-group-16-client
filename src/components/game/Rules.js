import React from "react";
import './rulesStyle.css';
import 'react-responsive-modal/styles.css';
import ReactTooltip from "react-tooltip";

import {Modal} from 'react-responsive-modal';
import Knight from '../../views/graphics/knight.png'
import Monopoly from '../../views/graphics/monopoly.png'
import Victory from '../../views/graphics/victory.png'
import Road from '../../views/graphics/road.png'
import Plenty from '../../views/graphics/plenty.png'
import HexInstructions from "./HexInstructions";
import PlentyInstructions from "./PlentyInstructions"

export default class Rules extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      open: false,
    }
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;
    const bg = {
      overlay: {
        background: "green"
      },
      modal:{
        background:"beige"
      }
    };

    return (
      <div>
        <ReactTooltip type={'light'} delayShow={'250'}/>
        <button
          className={'rulesButton'}
          onClick={this.onOpenModal}><div data-tip={'Show game rules'} style={{position: 'relative', left: '-2.5px'}}>?</div></button>
            <Modal open={open} onClose={this.onCloseModal} blockScroll={false} center styles={bg} >
              <h1 className={'gameTitle'}>The Settlers of Toucan</h1>
              <h2 className={'quickStartTitle'}>Quick Start</h2>
              <ul>
                <li className={'li'}>
                  <p className={'p'}>Beginning the game is easy. Just build a settlement and a road, then pass it on to the next player.</p>
                </li>
                <li className={'li'}>
                  <p className={'p'}>The first two rounds are to set up the game. The buildings and roads are for free, and you will get a resource for every tile</p>
                  <p className={'paragraph'}> next to your initial settlement.</p>
                </li>
                <li className={'li'}>
                  <p className={'p'}>The order of play reverts itself after the first round. After the initial setup, a random player gets picked to start.</p>
                </li>
                <li className={'li'}><p>Once started, you will collect resources every time the dice gets rolled and it matches the number of a tile</p>
                  <p className={'p'}> you have a building next to.</p>
                </li>
                <li className={'li'}><p>Once collected, the resources can be used to build more roads or settlements and also to upgrade a settlement to a city.</p>
                  <p className={'p'}>Cities get twice the resources settlements do. It is time to go big!</p>
                </li>
                <li className={'li'}><p style={{marginBottom: "20px"}}>If you don&#39;t have the correct resources you can always trade. But this is expensive so better build smart.</p>
                </li>
                <li className={'li'}><p>Settlements give you one, cities two points. If you reach ten points first you win the game. This means you are a worthy </p>
                  <p className={'p'}>inhabitant of Toucan!</p>
                </li>
                <li className={'li'}><p>The thief is no one&#39;s friend! When he occupies a tile then it can&#39;t distribute resources. Normally he lives in the desert, </p>
                  <p className={'p'}> but with a Knight Card, you can chase him to steal from those you don&#39;t like.</p>
                </li>
                <li className={'li'}><p>When you set the thief on a tile, he is kind enough to share with you. This means you can steal one random resource </p>
                  <p className={'p'}> from one of the players next to the new thief tile. But only if there really is one, obviously!</p>
                </li>
                <li className={'li'}><p>With your resources, you can also buy development cards. They can help you to get ahead. Sometimes there is even a</p>
                  <p className={'p'}>whole point to be earned.</p>
                </li>
                <li className={'li'}><p>You can choose when you want to play your development card. But remember, when the game is over they are of no use. </p>
                  <p className={'p'}>So better be quick! Time to conspire with the thief again maybe?</p>
                </li>
              </ul>
              <h2 className={'titleRules'}>Tiles</h2>
              <p>The tiles have a randomly assigned resource. It is important to remember that the probability the numbers are rolled </p>
                <p>is the same as with two dice in the real world. So having a settlement next to the two or the twelve are the least </p>
                  <p>effective placements. When the number of a tile is rolled, then every building that is next to that tile will receive the </p>
                    <p>appropriate amount of resources. So if you have multiple buildings next to the same tile you get more resources.</p>
                    <p>Every different kind of tile gives you back a different type of resource. Below you can have an overview. </p>
                    <p>The desert tile doesn't give any resources back, it's only the thief's starting point.</p>

                    <div style={{textAlign: "center", marginBottom:"50px", marginTop: "50px"}}>
                      <HexInstructions/>
                    </div>

              <h2 className={'titleRules'}>Settlements</h2>
              <p>Settlements allow you to collect resources from the tiles that you need to keep on building. They also give you one </p>
              <p>victory point each. The first two settlements can be built wherever you want, but from then on the next buildings need to be</p>
              <p> at least two roads away and can only be built on the endpoint of a road. Your empire can manage a maximum of five</p>
              <p style={{marginBottom: "50px"}}>settlements at a time.</p>

              <h2 className={'titleRules'}>Cities</h2>
              <p>Cities behave similarly to settlements. The main difference is that they give you twice the resources and twice the </p>
              <p style ={{marginBottom: "50px"}}>victory points. A city can only be built by upgrading a settlement and you can hold a maximum of four cities.</p>

              <h2 className={'titleRules'}>Roads</h2>
              <p>Roads are needed to reach new territory where new settlements can be built on. Roads can not fork, and settlements can </p>
              <p style={{marginBottom: "50px"}}>only be built at the end of a road. Up to fifteen roads can be build to connect your buildings.</p>

              <h2 className={'titleRules'}>Trade</h2>
              <p>As soon as you have four resources of the same type, you can trade with the Toucan National Bank. For the four resources, </p>
              <p style={{marginBottom: "50px"}}> you will receive one other resource of your choice. This might be useful if you do not have a building next to that resource.</p>

              <h2 className={'titleRules'}>The Thief</h2>
              <p>The thief blocks a tile from dispensing resources. He is placed in the desert initially but can be placed on other tiles </p>
              <p style={{marginBottom: "50px"}}>either by using a Knight Card or when a seven is rolled.</p>

              <h2 className={'titleRules'}>The Development Cards</h2>
              <p>There are different types of development cards that can give you an advantage. They can be bought using resources.</p>
              <p>But you can not choose which card it will be. You better not have a gambling problem! Once the card is bought, it can </p>
              <p style={{marginBottom: "30px"}}>not be used in the same turn and you can only pass on the move or buy another card. But it is surely worth the wait!</p>
              <ul>
                <li className={'li'}>
                  <p> <b>The Knight Card</b>
                  <img className={'knightImage'} src = {Knight} alt = ""/>
                  <t style={{marginLeft:'29px'}}>The Thief can be placed on a new tile. If the tile has buildings next to it, the player can</t> </p>
                  <p className={'progressParagraph'}>choose from which opponent a random resource is stolen. If the opponent has an </p>
                  <p className={'progressParagraph'}>empty wallet then there is nothing to get.</p>
                </li>
                <li className={'li'}>
                  <p><b>The Victory Point</b>
                  <img className={'victoryImage'} src = {Victory} alt = ""/>
                  <t style={{marginLeft:'29px'}}> The victory point is a card that can do nothing but gives you an extra victory point.</t></p>
                  <p className={'progressParagraph'}>This means you need one less settlement to win the game.</p>
                </li>
                <li className={'li'}>
                  <p><b>The Monopoly Card</b>
                  <img className={'monopolyImage'} src = {Monopoly} alt = ""/>
                  <t style={{marginLeft:'28px'}}>This card gives you the power to collect one type of resources from all the players in the</t></p>
                  <p className={'progressParagraph'}>game. So if you suspect that there is a lot of lumber going around it might be time to </p>
                  <p className={'progressParagraph'}>strike.</p>
                </li>
                <li className={'li'}>
                  <p><b>The Road Progress</b>
                  <img className={'roadProgressImage'} src = {Road} alt = ""/>
                  <t style={{marginLeft:'29px'}}> All roads lead to Rome, but in your case, they might lead to new territory. Using this</t></p>
                  <p style={{marginBottom: "30px", marginLeft: '208px', marginTop: '-10px'}}>card you can build two roads for free.</p>
                </li>
                <li className={'li'}><p><b>The Plenty Progress</b>
                  <img className={'plentyImage'} src = {Plenty} alt = ""/>
                  <t style={{marginLeft:'23px'}}>It was a warm summer and it is time to harvest your reward. With this card, you can</t></p>
                  <p className={'progressParagraph'}>choose between three worker types. Below, you can have an overview of what they will</p>
                  <p className={'progressParagraph'}>produce for you, the mighty conqueror of Toucan.</p>
                </li>
              </ul>

              <div style={{textAlign: "center", marginBottom:"50px", marginTop: "50px"}}>
                <PlentyInstructions/>
              </div>

              <h2 className={'titleRules'}>The Pass Move</h2>
              <p>When you are finished extending your empire give the others a chance as well! We know you only want more resources </p>
              <p>from their dice rolls, but your secret is save with us!</p>

            </Modal>
      </div>
    );
  }

}
