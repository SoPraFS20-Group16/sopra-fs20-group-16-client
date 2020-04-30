import React from 'react';
import Hex from "./Hex";
import Road from "./Road";
import Settlement from "./Settlement";
import {api} from "../../helpers/api";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      streetColor: "yellow",
      radius: 50,
      randomResPics: [],
      imgList:  ["https://cdn.clipart.email/f78357664d2afe5d3b1cca9b8b483eec_2-icon-transparent-png-clipart-free-download-ywd_1600-1600.png",
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

    const lumber = "views/graphics/lumber.png";
    const grain = "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin3.png";
    const brick = "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin4.png";
    const sheep = "http://www.centives.net/S/wp-content/uploads/2011/10/101211_0644_Resourcesin6.png";
    const ore = "https://purepng.com/public/uploads/large/purepng.com-mountainmountainlarge-landformmountain-peakvolcanic-mountainfold-mountainblock-ore-1411527067889ftubz.png";

    for (let i = 0; i <= 3; i++) {
      randomImagesArray.push(lumber);
      randomImagesArray.push(sheep);
      randomImagesArray.push(grain);
    }
    for (let i = 0; i <= 2; i++) {
      randomImagesArray.push(ore);
      randomImagesArray.push(brick);
    }

    this.setState({randomResPics: randomImagesArray})

  }


  randomNumber() {
    const randomNumberArray = [];

    const number2 = "https://cdn.clipart.email/f78357664d2afe5d3b1cca9b8b483eec_2-icon-transparent-png-clipart-free-download-ywd_1600-1600.png";
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
    const r = this.state.radius;

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

  // Calculates geometric median between 2 pairs of coordinates (x,y), (x2,y2)
  coordsMedian(props) {
    const midX = (props.x + props.x2)/2;
    const midY = (props.y + props.y2)/2;

    return (
      {
        midX: midX,
        midY: midY
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
      "https://cdn.clipart.email/943b8eba8365c2a25871ad98558678ed_free-pictures-of-the-number-12-download-free-clip-art-free-clip-_500-500.png"];

    for (let i = 2; i <= 12; i++) {
      if (link === imgList[i]) {
        return i;
      }
    }
  }

  // Create and set invisible clickable roads on every hexagon's edge
  createInvisibleRoad() {
    const roadArray = [];
    let coords1;
    let coords2;
    let coordsMid;
    let k, j;

    // Vertical streets
    for (k = 0; k <= 10; k += 1) {
      for (j = 1; j <= 9; j += 2){
        // Use coordTrans to transform normal coordinates to pixels
        coords1 = this.coordTrans({x: k, y: j});
        coords2 = this.coordTrans({x: k, y: j+1});
        // Calculate the median point between the two pairs of coordinates to position the road
        coordsMid = this.coordsMedian({x: coords1.x, y: coords1.y, x2: coords2.x, y2: coords2.y});

        if(j === 5 && (k === 0 || k === 10)) {
          roadArray.push(<Road {...coordsMid} rotation="rotate(90deg)"/>);
        }

        if((j===3 || j === 7) && (k % 2 !== 0)){
          roadArray.push(<Road {...coordsMid} rotation="rotate(90deg)"/>);
        }

        if((j===1 || j===5 || j===9) && (k===2 || k===4 || k===6 || k===8)){
          roadArray.push(<Road {...coordsMid} rotation="rotate(90deg)"/>);
        }
      }
    }

    for(j = 1; j <= 11; j += 2){
      for(k = 0; k <= 9; k += 1){
        coords1 = this.coordTrans({x: k, y: j});
        coords2 = this.coordTrans({x: k+1, y: j-1});
        coordsMid = this.coordsMedian({x: coords1.x, y: coords1.y, x2: coords2.x, y2: coords2.y});

        if(k !== 0 && k !== 8 && k % 2 === 0 && (j === 1 || j === 5 || j === 9)){
          roadArray.push(<Road {...coordsMid} rotation="rotate(150deg)"/>);
        }

        if((j === 3 || j === 7 || j === 11) && (k === 3 || k === 5 || k === 7)){
          roadArray.push(<Road {...coordsMid} rotation="rotate(150deg)"/>);
        }

        if(((j === 3 || j === 7) && k === 1) || (j === 5 || j === 9) && k === 8){
          roadArray.push(<Road {...coordsMid} rotation="rotate(150deg)"/>);
        }

        if(j === 5 && k === 0 || j === 7 && k === 9){
          roadArray.push(<Road {...coordsMid} rotation="rotate(150deg)"/>);
        }
      }
    }

    for(j = 1; j <= 11; j += 2) {
      for (k = 1; k <= 10; k += 1) {
        coords1 = this.coordTrans({x: k, y: j});
        coords2 = this.coordTrans({x: k - 1, y: j - 1});
        coordsMid = this.coordsMedian({x: coords1.x, y: coords1.y, x2: coords2.x, y2: coords2.y});

        if(k !== 2 && k !== 10 && k % 2 === 0 && (j === 1 || j === 5 || j === 9)){
          roadArray.push(<Road {...coordsMid} rotation="rotate(30deg)"/>);
        }

        if((j === 3 || j === 7 || j === 11) && (k === 3 || k === 5 || k === 7)){
          roadArray.push(<Road {...coordsMid} rotation="rotate(30deg)"/>);
        }

        if(((j === 3 || j === 7) && k === 9) || (j === 5 || j === 9) && k === 2){
          roadArray.push(<Road {...coordsMid} rotation="rotate(30deg)"/>);
        }

        if(j === 7 && k === 1 || j === 5 && k === 10){
          roadArray.push(<Road {...coordsMid} rotation="rotate(30deg)"/>);
        }
      }
    }
        return roadArray;
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

    const info =[];

    for(let i=0; i<=18; i++){
      const top = this.props.tiles[i].coordinates[0].y;
      const left = this.props.tiles[i].coordinates[1].x;
      const number = this.props.tiles[i].tileNumber;
      const tileType = this.props.tiles[i].tileType;

      info.push({y: top, x: left, number: number, tileType: tileType});
    }

    return info;
  }


  render() {
    return (
      <html className={'game-bg'}>
        <div className="Board">
          <div
            style={{
              width: 453,
              height: 420,
              position: "relative",
              justifyContent: 'centre'
            }}
          >


            {this.props.tiles && this.props.tiles.length !== 0 && this.createBoard().map(
              (tile) => <Hex
                {...this.coordTrans({x: tile.x, y : tile.y, radius: this.state.radius})}
                number={tile.number}
                tileType={tile.tileType}
                numberImg={this.state.imgList[tile.number-2]}

              />)}

            {/* The following <div> below is responsible for the placeholders which are above the tiles -> this is where your city, street, other elements are placed. */}
            <div
              style={{
                width: 453,
                height: 420,
                position: "absolute",
                /* The zIndex allows to adjust what is in the foreground and background */
                zIndex: 0
              }}
            >
              {this.createInvisibleRoad()}
              {this.createInvisibleSettlement()}
            </div>

          </div>
        </div>
      </html>
    );
  }
}
