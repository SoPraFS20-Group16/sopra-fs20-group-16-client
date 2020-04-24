import React, {HTMLAttributes as state} from 'react';
import {withRouter} from 'react-router-dom';

import Hexagon from "react-svg-hexagon";
import HexCoordTrans from "./HexCoordTrans";
import Hex from "./Hex";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      streetColor: "yellow",

      /*
      hexCoords: [
          {03: {200,600}},
          {01: "100x200"}
      ],

      cityCoords : {
          {}
      },

      streetCords : {
          {}
      }

       */
    }
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({[key]: value});
  }

  hexCoordTrans(left, top){
    return [left*43.30127, ]
    //return [left* (Math.sqrt(Math.pow(side,2)- Math.pow(side/2,2))), top*(side+(side/2))]

  }



  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  randomImage(){
    const images = ["http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin5.png",
      "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin3.png",
      "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin4.png",
      "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin6.png",
      "https://purepng.com/public/uploads/large/purepng.com-mountainmountainlarge-landformmountain-peakvolcanic-mountainfold-mountainblock-mountain-1411527067889ftubz.png"
    ];

    const randomImagesArray=[];

    const wood = images[0];
    const grain = images[1];
    const brick = images[2];
    const sheep = images[3];
    const mountain = images[4];

    for(let i=0 ;i<=3; i++){
      randomImagesArray.push(wood);
      randomImagesArray.push(sheep);
      randomImagesArray.push(grain);
    }
    for(let i=0 ;i<=2; i++){
      randomImagesArray.push(mountain);
      randomImagesArray.push(brick);
    }

    return this.shuffle(randomImagesArray);

  }


  createBoard(){

    const tiles = [];

    const images = this.randomImage();

    console.log(images);

    let i=-1;

    for(let left=2; left <=6; left+=2){
      i=i+1;
      tiles.push(<Hex {...HexCoordTrans({left:left,top:0})} img={images[i]}/>)
      //tiles.push(<Hex  side = {60} left={this.hexCoordTrans(left,0, 60)[0]} top={this.hexCoordTrans(left,0, 60)[1]}/>)
    }

    for(let left=1; left <=7; left+=2){
      i=i+1;
      tiles.push(<Hex {...HexCoordTrans({left:left,top:2})} img={images[i]}/>)
    }
    for(let left=0; left <=2; left+=2){
      i=i+1;
      tiles.push(<Hex {...HexCoordTrans({left:left,top:4})} img = {images[i]}/>)
    }

    tiles.push(<Hex {...HexCoordTrans({left:4,top:4})} img = "https://purepng.com/public/uploads/large/desert-9hl.png"/>)

    for(let left=6; left <=8; left+=2){
      i=i+1;
      tiles.push(<Hex {...HexCoordTrans({left:left,top:4})} img = {images[i]}/>)
    }

    for(let left=1; left <=7; left+=2){
      i=i+1;
      tiles.push(<Hex {...HexCoordTrans({left:left,top:6})} img={images[i]}/>)
    }
    for(let left=2; left <=6; left+=2){
      i=i+1;
(      tiles.push(<Hex {...HexCoordTrans({left:left,top:8})} img={images[i]}/>)
)    }



    return tiles;

  }




  render() {
    return (
      <div className="Board">
        <div
          style={{
            width: 433.0127,
            height: 400,
            backgroundColor: "pink",
            position: "absolute",

            right: 250,
            top: 250
          }}
        >
          {this.createBoard()}

        </div>
      </div>

    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
// export default withRouter(Board);