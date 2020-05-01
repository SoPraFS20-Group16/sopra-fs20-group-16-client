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
      colors: ["blue", "red", "green", "yellow"],
      playerColors: []
    }
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({[key]: value});
  }

  componentDidMount() {
    let lst = [];
    const colors = ["blue", "red", "green", "yellow"];

    const players = this.props.players;

    players.map((player, key) => lst.push({player: colors[key]}));

    this.setState({playerColors: lst});
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

  getSettlements(){
    const info = [];
    const settlements = this.props.settlements;


    for (let i=0; i<= settlements.length; i++){
      const top = settlements[i].y;
      const left = settlements[i].x;
      info.push({y: top, x:left})
    }
    return info;

  }


  getMoves(){
    const info = [];

    const moves = this.props.moves;
    const coordinates = this.props.moves.building.coordinates;

    for (let i=0; i<= moves.length; i++){
      const top = coordinates[i].y;
      const left = coordinates[i].x;
      info.push({y: top, x: left })

    }
    return info;
  }


  createBoard(){
    const info =[];

    for(let i=0; i<=18; i++){
      const top = this.props.tiles[i].coordinates[0].y;
      const left = this.props.tiles[i].coordinates[1].x;
      const number = this.props.tiles[i].tileNumber;
      const type = this.props.tiles[i].type;

      // console.log("createBoard: " + top + ' ' + left + ' ' + number + ' ' + type)

      info.push({y: top, x: left, number: number, tileType: type});
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
            marginLeft: "25px",
            marginTop: "25px",
            justifyContent: 'centre',
            alignItems: 'centre',
          }}
        >

          {this.props.tiles && this.props.tiles.length !== 0 && this.createBoard().map(
            (tile) => <Hex
              {...this.coordTrans({x: tile.x, y : tile.y, radius: this.state.radius})}
              number={tile.number}
              type={tile.tileType}

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
