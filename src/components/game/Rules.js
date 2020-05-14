import React from "react";
import './style.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import HexInstructions from "./HexInstructions";

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
        <button
          className={'rulesButton'}
          onClick={this.onOpenModal}>?</button>
            <Modal open={open} onClose={this.onCloseModal} blockScroll={false} center styles={bg} >
              <h1 style ={{color: "green", textAlign: "center", fontWeight: 'bold'}}>The Settlers of Toucan</h1>
              <h2 id="quick-start" style={{marginBottom: "15px" , marginTop: "50px", fontWeight: 'bold'}}>Quick Start</h2>
              <ul>
                <li><p style={{marginBottom: "20px"}}>Beginning the game is easy. Just build a settlement and a road, then pass it on to the next player.</p>
                </li>
                <li><p style={{marginBottom: "20px"}}>Once started, you will collect resources when the dice is rolled and it matches the number of a tile you have a building next to.</p>
                </li>
                <li><p>Once collected, the resources can be used to build more roads or settlements and also to upgrade a settlement to a city.</p>
                  <p style={{marginBottom: "20px"}}>Cities get twice the resources settlements do. It is time to go big!</p>
                </li>
                <li><p style={{marginBottom: "20px"}}>If you don&#39;t have the correct resources you can always trade. But this is expensive so better build smart.</p>
                </li>
                <li><p>Settlements give you one, cities two points. If you reach ten points first you win the game. This means you are a worthy </p>
                  <p style={{marginBottom: "20px"}}>inhabitant of Toucan!</p>
                </li>
                <li><p>The Robber is no one&#39;s friend! When he occupies a tile then it can&#39;t distribute resources. Normally he lives in the desert, but </p>
                  <p style={{marginBottom: "20px"}}>with a Knight Card, you can chase him to steal from those you don&#39;t like.</p>
                </li>
                <li><p>When you set the robber on a tile, he is kind enough to share with you. This means you can steal one random resource from </p>
                  <p style={{marginBottom: "20px"}}>one of the players next to the new robber tile. But only if there really is one, obviously!</p>
                </li>
                <li><p>With your resources, you can also buy development cards. They can help you to get ahead. Sometimes there is even a whole</p>
                  <p style={{marginBottom: "20px"}}>point to be earned.</p>
                </li>
                <li><p>You can choose when you want to play your development card. But remember, when the game is over they are no user. </p>
                  <p style={{marginBottom: "50px"}}>So better be quick! Time to conspire with the thief again maybe?</p>
                </li>
              </ul>
              <h2 id="tiles" style={{marginBottom: "15px", fontWeight: 'bold'}}>Tiles</h2>
              <p>The tiles have a randomly assigned resource. It is important to remember that the probability the numbers are rolled </p>
                <p>is the same as with two dice in the real world. So having a settlement next to the two or the twelve are the least </p>
                  <p>effective placements. When the number of a tile is rolled, then every building that is next to that tile will receive the </p>
                    <p>appropriate amount of resources. So if you have multiple buildings next to the same tile you get more resources.</p>
                    <p>Every different kind of tile gives you back a different type of resource. Below you can have an overview. </p>
                    <p>The desert tile doesn't give any resources back, it's only the robber's starting point.</p>

                    <div style={{textAlign: "center", marginBottom:"50px"}}>
                      <HexInstructions/>
                    </div>

              <h2 id="settlements" style={{marginBottom: "15px", fontWeight: 'bold'}}>Settlements</h2>
              <p>Settlements allow you to collect resources from the tiles that you need to keep on building. They also give you one </p>
              <p>victory point each. The first two settlements can be built wherever you want, but from then on the next buildings need to be</p>
              <p style={{marginBottom: "50px"}}>at least two roads away an can only be built on the endpoint of a road.</p>

              <h2 id="cities" style={{marginBottom: "15px", fontWeight: 'bold'}}>Cities</h2>
              <p>Cities behave similarly to settlements. The main difference is that they give you twice the resources and twice the </p>
              <p style ={{marginBottom: "50px"}}>victory points. A city can only be built by upgrading a settlement.</p>


              <h2 id="roads" style={{marginBottom: "15px", fontWeight: 'bold'}}>Roads</h2>
              <p>Roads are needed to reach new territory where new settlements can be built on. Roads can not fork, and settlements can </p>
              <p style={{marginBottom: "50px"}}>only be built at the end of a road.</p>

              <h2 id="trade" style={{marginBottom: "15px", fontWeight: 'bold'}}>Trade</h2>
              <p>As soon as you have four resources you can trade with the Tocan National Bank. For the four resources, you will receive </p>
              <p style={{marginBottom: "50px"}}>one other resource of your choice. This might be useful if you do not have a building next to that resource.</p>

              <h2 id="the-thief" style={{marginBottom: "15px", fontWeight: 'bold'}}>The Thief</h2>
              <p>The thief blocks a tile from dispensing resources. He is placed in the desert initially but can be placed on other tiles </p>
              <p style={{marginBottom: "50px"}}>either by using a Knight Card or when a seven is rolled.</p>

              <h2 id="the-development-cards" style={{marginBottom: "15px", fontWeight: 'bold'}}>The Development Cards</h2>
              <p>There are different types of development cards that can give you an advantage. They can be bought using resources.</p>
              <p>But you can not choose which card it will be. You better not have a gambling problem! Once the card is bought, it can </p>
              <p style={{marginBottom: "30px"}}>not be used in the same turn. But it is surely worth the wait!</p>
              <ul>
                <li><p> <b>The Knight Card</b>: The Thief can be placed on a new tile. If the tile has buildings next to it the player can choose </p>
                  <p style={{marginBottom: "20px"}}>from which opponent a random resource is stolen. If the opponent has an empty wallet then there is nothing to get.</p>
                </li>
                <li><p><b>The Victory Point</b>: The victory point is a card that can do nothing but gives you an extra victory point. This means </p>
                  <p style={{marginBottom: "20px"}}>you need one less settlement to win the game.</p>
                </li>
                <li><p><b>The Monopoly Card</b>: This card gives you the power to collect one type of resources from all the players in the game. </p>
                  <p style={{marginBottom: "20px"}}>So if you suspect that there is a lot of Wood going around it might be time to strike.</p>
                </li>
                <li><p><b>The Road Progress</b>: All roads lead to Rome, but in your case, they might lead to new territory. Using this card you can </p>
                  <p style={{marginBottom: "20px"}}>build two roads for free.</p>
                </li>
                <li><p><b>The Plenty Progress</b>: It was a warm summer and it is time to harvest your reward. With this card, you can choose two </p>
                  <p style={{marginBottom: "50px"}}>resources. Is it time for a settlement already?</p>
                </li>
              </ul>
              <h2 id="the-pass-move" style={{marginBottom: "15px", fontWeight: 'bold'}}>The Pass Move</h2>
              <p>When you are finished extending your empire give the others a chance as well! We know you only want more resources </p>
              <p>from their dice rolls, but your secret is save with us!</p>

            </Modal>
      </div>
    );
  }

}

