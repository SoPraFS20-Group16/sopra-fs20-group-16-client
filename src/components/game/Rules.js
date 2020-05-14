import React from "react";
import './style.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class Rules extends React.Component{
  constructor(props) {
    super();
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
    return (
      <div>
        <button
          className={'rulesButton'}
          onClick={this.onOpenModal}>?</button>
            <Modal open={open} onClose={this.onCloseModal} blockScroll={false} >

              {/*TODO: insert in separate file and format newlines correctly so that text does not overlap*/}
              <h1>The Settlers of Toucan</h1>
              <h2 id="quick-start">Quick Start</h2>
              <ul>
                <li><p>Beginning the game is easy. Just build a settlement and a road, then pass it on to the next player.</p>
                </li>
                <li><p>Once started, you will collect resources when the dice is rolled and it matches the number of a tile you have a building next to.</p>
                </li>
                <li><p>Once collected, the resources can be used to build more roads or settlements and also to upgrade a settlement to a city.</p>
                  <p>Cities get twice the resources settlements do. It is time to go big!</p>
                </li>
                <li><p>If you don&#39;t have the correct resources you can always trade. But this is expensive so better build smart.</p>
                </li>
                <li><p>Settlements give you one, cities two points. If you reach ten points first you win the game. </p>
                  <p>This means you are a worthy inhabitant of Toucan!</p>
                </li>
                <li><p>The Robber is no one&#39;s friend! When he occupies a tile then it can&#39;t distribute resources. </p>
                  <p>Normally he lives in the desert, but with a Knight Card, you can chase him to steal from those you don&#39;t like.</p>
                </li>
                <li><p>When you set the robber on a tile, he is kind enough to share with you. This means you can steal </p>
                  <p>one random resource from one of the players next to the new robber tile. But only if there really is one, obviously!</p>
                </li>
                <li><p>With your resources, you can also buy development cards. They can help you to get ahead. </p>
                  <p>Sometimes there is even a whole point to be earned.</p>
                </li>
                <li><p>You can choose when you want to play your development card. But remember, when the game is over they are no user. </p>
                  <p>So better be quick! Time to conspire with the thief again maybe?</p>
                </li>
              </ul>
              <h2 id="tiles">Tiles</h2>
              <p>The tiles have a randomly assigned resource. It is important to remember that the probability the numbers are rolled </p>
                <p>is the same as with two dice in the real world. So having a settlement next to the two or the twelve are the least </p>
                  <p>effective placements. When the number of a tile is rolled, then every building that is next to that tile will receive the </p>
                    <p>appropriate amount of resources. So if you have multiple buildings next to the same tile you get more resources.</p>
              <h2 id="settlements">Settlements</h2>
              <p>Settlements allow you to collect resources from the tiles that you need to keep on building. They also give you one </p>
              <p>victory point each. The first two settlements can be built wherever you want, but from then on the next buildings need to be</p>
              <p>at least two roads away an can only be built on the endpoint of a road.</p>
              <h2 id="cities">Cities</h2>
              <p>Cities behave similarly to settlements. The main difference is that they give you twice the resources and twice the </p>
              <p>victory points. A city can only be built by upgrading a settlement.</p>
              <h2 id="roads">Roads</h2>
              <p>Roads are needed to reach new territory where new settlements can be built on. Roads can not fork, and settlements can </p>
              <p>only be built at the end of a road.</p>
              <h2 id="trade">Trade</h2>
              <p>As soon as you have four resources you can trade with the Tocan National Bank. For the four resources, you will receive </p>
              <p>one other resource of your choice. This might be useful if you do not have a building next to that resource.</p>
              <h2 id="the-thief">The Thief</h2>
              <p>The thief blocks a tile from dispensing resources. He is placed in the desert initially but can be placed on other tiles </p>
              <p>either by using a Knight Card or when a seven is rolled.</p>
              <h2 id="the-development-cards">The Development Cards</h2>
              <p>There are different types of development cards that can give you an advantage. They can be bought using resources.</p>
              <p>But you can not choose which card it will be. You better not have a gambling problem! Once the card is bought, it can </p>
              <p>not be used in the same turn. But it is surely worth the wait!</p>
              <ul>
                <li><p>The Knight Card: The Thief can be placed on a new tile. If the tile has buildings next to it the player can choose </p>
                  <p>from which opponent a random resource is stolen. If the opponent has an empty wallet then there is nothing to get.</p>
                </li>
                <li><p>The Victory Point: The victory point is a card that can do nothing but gives you an extra victory point. This means </p>
                  <p>you need one less settlement to win the game.</p>
                </li>
                <li><p>The Monopoly Card: This card gives you the power to collect one type of resources from all the players in the game. </p>
                  <p>So if you suspect that there is a lot of Wood going around it might be time to strike.</p>
                </li>
                <li><p>The Road Progress: All roads lead to Rome, but in your case, they might lead to new territory. Using this card you can </p>
                  <p>build two roads for free.</p>
                </li>
                <li><p>The Plenty Progress: It was a warm summer and it is time to harvest your reward. With this card, you can choose two </p>
                  <p>resources. Is it time for a settlement already?</p>
                </li>
              </ul>
              <h2 id="the-pass-move">The Pass Move</h2>
              <p>When you are finished extending your empire give the others a chance as well! We know you only want more resources </p>
              <p>from their dice rolls, but your secret is save with us!</p>

            </Modal>
      </div>
    );
  }

}

