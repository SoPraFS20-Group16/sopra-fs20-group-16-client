import React, {HTMLAttributes as state} from 'react';
import {withRouter} from 'react-router-dom';
import Hex from "./Hex";
import Street from "./Street";
import Settlement from "./Settlement";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      streetColor: "yellow",

    }
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({[key]: value});
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

  randomImage() {

    const randomImagesArray = [];

    const wood = "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin5.png";
    const grain = "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin3.png";
    const brick = "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin4.png";
    const sheep = "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin6.png";
    const mountain = "https://purepng.com/public/uploads/large/purepng.com-mountainmountainlarge-landformmountain-peakvolcanic-mountainfold-mountainblock-mountain-1411527067889ftubz.png";

    for (let i = 0; i <= 3; i++) {
      randomImagesArray.push(wood);
      randomImagesArray.push(sheep);
      randomImagesArray.push(grain);
    }
    for (let i = 0; i <= 2; i++) {
      randomImagesArray.push(mountain);
      randomImagesArray.push(brick);
    }

    return this.shuffle(randomImagesArray);

  }


  randomNumber() {
    const randomNumberArray = [];

    const number2 = "https://cdn.clipart.email/f78357664d2afe5d3b1cca9b8b483eec_2-icon-transparent-png-clipart-free-download-ywd_1600-1600.png"
    const number3 = "https://cdn.clipart.email/b8bf34688e293e83ed672c52849ac4b6_numbers-in-circles-transparent-png-clipart-free-download-ywd_512-512.png";
    const number4 = "https://cdn.clipart.email/e59d16bf4dd0247fd88b6cedce0310c7_number-4-icon-transparent-png-clipart-free-download-ywd_1600-1600.png";
    const number5 = "https://cdn.clipart.email/01d598c665c53d3fbb1a6cf05359162d_transparent-5-icon-picture-1501683-transparent-5-icon_1600-1600.png";
    const number6 = "https://cdn.clipart.email/a140fa003c08d30ebf7d90d5c84af5ea_photo-6-png-picpng_512-512.png";
    const number7 = "https://cdn.clipart.email/af28259f9ecad0face218a06c1f2326c_perfect-circle-png-picture-518383-perfect-circle-png_1600-1600.png";
    const number8 = "https://cdn.clipart.email/08aab226fd16612aa7036ec03026b7c3_file8numbereightincirclepng-wikimedia-commons_500-500.png";
    const number9 = "https://cdn.clipart.email/eb787b6a1a137a061639a44b692059ff_numbers-in-circles-transparent-png-clipart-free-download-ywd_1600-1600.png";
    const number10 = "https://www.freeiconspng.com/uploads/number-10-9.png";
    const number11 = "https://img.pngio.com/file11numberelevenincirclepng-wikimedia-commons-the-number-11-png-500_500.png";
    const number12 = "https://cdn.clipart.email/943b8eba8365c2a25871ad98558678ed_free-pictures-of-the-number-12-download-free-clip-art-free-clip-_500-500.png";

    randomNumberArray.push(number2);
    randomNumberArray.push(number12);

    for (let i = 0; i <= 1; i++) {
      randomNumberArray.push(number3);
      randomNumberArray.push(number4);
      randomNumberArray.push(number5);
      randomNumberArray.push(number6);
      randomNumberArray.push(number7);
      randomNumberArray.push(number8);
      randomNumberArray.push(number9);
      randomNumberArray.push(number10);
      randomNumberArray.push(number11);
    }

    return this.shuffle(randomNumberArray);
  }


  // Transforms the normal/server coordinates to pixel coordinates
  coordTrans(props) {
    const x = props.x;
    const y = props.y;
    const r = props.radius;

    const xNew = x * Math.sqrt(Math.pow(r, 2) - Math.pow((r / 2), 2));
    let yNew;

    if (y % 2 === 0) {
      yNew = y * ((r + r / 2) / 2);
    } else {
      yNew = (y - 1) * ((r + r / 2) / 2) + r / 2
    }

    return (
      {
        x: xNew,
        y: yNew
      }
    )
  }


  getNumber(link) {
    const imgList = ["https://cdn.clipart.email/f78357664d2afe5d3b1cca9b8b483eec_2-icon-transparent-png-clipart-free-download-ywd_1600-1600.png",
      "https://cdn.clipart.email/b8bf34688e293e83ed672c52849ac4b6_numbers-in-circles-transparent-png-clipart-free-download-ywd_512-512.png",
      "https://cdn.clipart.email/e59d16bf4dd0247fd88b6cedce0310c7_number-4-icon-transparent-png-clipart-free-download-ywd_1600-1600.png",
      "https://cdn.clipart.email/01d598c665c53d3fbb1a6cf05359162d_transparent-5-icon-picture-1501683-transparent-5-icon_1600-1600.png",
      "https://cdn.clipart.email/a140fa003c08d30ebf7d90d5c84af5ea_photo-6-png-picpng_512-512.png",
      "https://cdn.clipart.email/af28259f9ecad0face218a06c1f2326c_perfect-circle-png-picture-518383-perfect-circle-png_1600-1600.png",
      "https://cdn.clipart.email/08aab226fd16612aa7036ec03026b7c3_file8numbereightincirclepng-wikimedia-commons_500-500.png",
      "https://cdn.clipart.email/eb787b6a1a137a061639a44b692059ff_numbers-in-circles-transparent-png-clipart-free-download-ywd_1600-1600.png",
      "https://www.freeiconspng.com/uploads/number-10-9.png",
      "https://img.pngio.com/file11numberelevenincirclepng-wikimedia-commons-the-number-11-png-500_500.png",
      "https://cdn.clipart.email/943b8eba8365c2a25871ad98558678ed_free-pictures-of-the-number-12-download-free-clip-art-free-clip-_500-500.png"]

    for (let i = 2; i <= 12; i++) {
      if (link === imgList[i]) {
        return i;
      }
    }
}


  createInvisibleStreet() {
    const streetArray = [];

    //FIRST ROW
    for (let i = 2; i <= 8; i += 2) {
      //vertical streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 1, radius: 50})} rotation="rotate(90deg)"/>);

      //right inclined streets
      if (i<=6){
        streetArray.push(<Street {...this.coordTrans({x: i, y: 1, radius: 50})} rotation="rotate(330deg)"/>);
      }

      //left inclined streets
      if (i>=4 && i<=8){
        streetArray.push(<Street {...this.coordTrans({x: i, y: 1, radius: 50})} rotation="rotate(210deg)"/>);
      }
    }

    //SECOND ROW
    for (let i=1; i<=9; i+=2){
      //vertical streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 3, radius: 50})} rotation="rotate(90deg)"/>);

      //right inclined streets
      if(i<=7){
        streetArray.push(<Street {...this.coordTrans({x: i, y: 3, radius: 50})} rotation="rotate(330deg)"/>);
      }

      //left inclines streets
      if (i>=3){
        streetArray.push(<Street {...this.coordTrans({x: i, y: 3, radius: 50})} rotation="rotate(210deg)"/>);
      }
    }

    //THIRD ROW
    for (let i=0; i<=10; i+=2){
      //vertical streets
      //TODO: show the first street -> now it doesn't because it goes out of the canvas
      streetArray.push(<Street {...this.coordTrans({x: i, y: 5, radius: 50})} rotation="rotate(90deg)"/>);

      //right inclined streets
      if (i<=8){
        streetArray.push(<Street {...this.coordTrans({x: i, y: 5, radius: 50})} rotation="rotate(330deg)"/>);
      }

      //left inclined streets
      if (i>=2){
        streetArray.push(<Street {...this.coordTrans({x: i, y: 5, radius: 50})} rotation="rotate(210deg)"/>);
      }
    }

    //FOURTH ROW
    for (let i=1; i<=9; i+=2){

      //vertical streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 7, radius: 50})} rotation="rotate(90deg)"/>);

      //right inclined streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 7, radius: 50})} rotation="rotate(330deg)"/>);

      //left inclined streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 7, radius: 50})} rotation="rotate(210deg)"/>);
    }

    //FIFTH ROW
    for (let i=2; i<=8;i+=2){
      //vertical streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 9, radius: 50})} rotation="rotate(90deg)"/>);

      //right inclined streets

      streetArray.push(<Street {...this.coordTrans({x: i, y: 9, radius: 50})} rotation="rotate(330deg)"/>);

      //left inclined streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 9, radius: 50})} rotation="rotate(210deg)"/>);
    }

    //SIXTH AND LAST ROW
    for(let i=3; i<=7; i+=2){
      //right inclined streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 11, radius: 50})} rotation="rotate(330deg)"/>);

      //left inclined streets
      streetArray.push(<Street {...this.coordTrans({x: i, y: 11, radius: 50})} rotation="rotate(210deg)"/>);
    }

    return streetArray;
  }


  createInvisibleSettlement(){
    const settlementArray = [];

    for (let i=3; i<=7; i+=2){
      //first row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 0 , radius: 50})}/>);
      //last row (twelfth)
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 11 , radius: 50})}/>);
    }

    for (let i=2; i<=8; i+=2){
      //second row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 1 , radius: 50})}/>);
      //third row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 2 , radius: 50})}/>);
      //tenth row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 9 , radius: 50})}/>);
      //eleventh row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 10 , radius: 50})}/>);

    }

    for (let i=1; i<=9; i+=2){
      //fourth row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 3 , radius: 50})}/>);
      //fifth row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 4 , radius: 50})}/>);

      //eighth row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 7 , radius: 50})}/>);
      //ninth row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 8 , radius: 50})}/>);
    }

    for (let i=0; i<=10; i+=2){
      //sixth row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 5 , radius: 50})}/>);
      //seventh row
      settlementArray.push(<Settlement {...this.coordTrans({x: i, y : 6 , radius: 50})}/>);
    }

    return settlementArray;
  }









  createBoard(){

    const hexes = [];

    const images = this.randomImage();
    const numberImg = this.randomNumber();
    let i=-1;
    let j=-1;

    for(let left = 2; left <= 6; left += 2) {
      i=i+1;
      j=j+1;
      hexes.push(<Hex {...this.coordTrans({x: left, y : 0, radius: 50})} img = {images[i]} numberImg = {numberImg[j]} number ={this.getNumber(numberImg[j])}/>);
    }
    console.log(hexes[2].props.number);

    for(let left = 1; left <= 7; left += 2) {
      i=i+1;
      j=j+1;
      hexes.push(<Hex {...this.coordTrans({x: left, y : 2, radius: 50})} img = {images[i]} numberImg = {numberImg[j]}  number ={this.getNumber(numberImg[j])} />);
    }

    for(let left = 0; left <= 2; left += 2) {
      i=i+1;
      j=j+1;
      hexes.push(<Hex {...this.coordTrans({x: left, y : 4, radius: 50})} img = {images[i]} numberImg = {numberImg[j]} number ={this.getNumber(numberImg[j])}/>);
    }

    hexes.push(<Hex {...this.coordTrans({x: 4, y : 4, radius: 50})} img = "https://purepng.com/public/uploads/large/desert-9hl.png" numberImg = "https://www.kindpng.com/picc/b/133/1338575.png"/>)

    for(let left = 6; left <= 8; left += 2) {
      i=i+1;
      j=j+1;
      hexes.push(<Hex {...this.coordTrans({x: left, y : 4, radius: 50})} img = {images[i]} numberImg = {numberImg[j]} number ={this.getNumber(numberImg[j])}/>);
    }


    for(let left = 1; left <= 7; left += 2) {
      i=i+1;
      j=j+1;
      hexes.push(<Hex {...this.coordTrans({x: left, y : 6, radius: 50})} img = {images[i]} numberImg = {numberImg[j]} number ={this.getNumber(numberImg[j])}/>);
    }

    for(let left = 2; left <= 6; left += 2) {
      i=i+1;
      j=j+1;
      hexes.push(<Hex {...this.coordTrans({x: left, y : 8, radius: 50})} img = {images[i]} numberImg = {numberImg[j]} number ={this.getNumber(numberImg[j])}/>);
    }

    return hexes;
  }


  render() {
    return (
      <html className={'game-bg'}>
        <div className="Board">
          <div
            style={{
              width: 433.0127,
              height: 800,
              position: "relative"
            }}
          >

            {this.createBoard()}


            {/* The following <div> below is reponsible for the placeholders which are above the tiles -> this is where your city, street, other elements are placed. */}
            <div
              style={{
                width: 500,
                height: 500,
                position: "absolute",
                /* The zIndex allows to adjust what is in the foreground and background */
                zIndex: 0
              }}
            >


              {this.createInvisibleStreet()}
              {this.createInvisibleSettlement()}


            </div>

          </div>
        </div>
      </html>
    );
  }
}
