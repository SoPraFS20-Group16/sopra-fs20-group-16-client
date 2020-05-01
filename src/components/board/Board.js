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


/*  Map built roads and roads that are possible to build and make parameters for
  their creation*/
  makeBuildableRoads() {
    const roadArray = [];

    let roadInfo = {
      midX:null,
      midY:null,
      color:'blue',
      rotation: "rotate(0deg)",
      moveId: null,
    }

    let transCoords1, transCoords2, midCoords;

    this.props.moves.map((move) => {
      if(move.building !== undefined && move.building.buildingType === "ROAD") {

        // Set moveId
        roadInfo.moveId = move.moveId;

        // Transform road's coordinates to pixels
        transCoords1 = this.coordTrans({
          x:move.building.coordinates[0].x,
          y:move.building.coordinates[0].y
        });
        transCoords2 = this.coordTrans({
          x:move.building.coordinates[1].x,
          y:move.building.coordinates[1].y
        });

        // Calculate the median point between the two coordinates in pixels
        midCoords = this.coordsMedian({
          x:transCoords1.x,
          y:transCoords1.y,
          x2:transCoords2.x,
          y2:transCoords2.y,
        });

        roadInfo.midX = midCoords.midX;
        roadInfo.midY = midCoords.midY;

        // Calculate needed rotation based on coordinates
        if(transCoords1.x === transCoords2.x){roadInfo.rotation = "rotate(90)"}
        else {
          if(transCoords1.y > transCoords2.y){
            if(transCoords1.x > transCoords2.x){roadInfo.rotation = "rotate(-30)"}
            else {roadInfo.rotation = "rotate(30)"}
          }
          else if(transCoords1.y < transCoords2.y){
            if(transCoords1.x > transCoords2.x){roadInfo.rotation = "rotate(30)"}
            else {roadInfo.rotation = "rotate(-30)"}
          }
        }

        roadArray.push(roadInfo);
      }
    })
    return roadArray;
  }

  makeBuiltRoads() {
    const roadArray = [];

    let roadInfo = {
      midX:null,
      midY:null,
      color:'blue',
      rotation: "rotate(0deg)",
      moveId: null,
    }

    let transCoords1, transCoords2, midCoords;

    this.props.roads.map((move) => {
      if(move.building.buildingType === "ROAD") {

        // Set moveId
        roadInfo.moveId = move.moveId;

        // Transform road's coordinates to pixels
        transCoords1 = this.coordTrans({
          x:move.building.coordinates[0].x,
          y:move.building.coordinates[0].y
        });
        transCoords2 = this.coordTrans({
          x:move.building.coordinates[1].x,
          y:move.building.coordinates[1].y
        });

        // Calculate the median point between the two coordinates in pixels
        midCoords = this.coordsMedian({
          x:transCoords1.x,
          y:transCoords1.y,
          x2:transCoords2.x,
          y2:transCoords2.y,
        });

        roadInfo.midX = midCoords.midX;
        roadInfo.midY = midCoords.midY;

        // Calculate needed rotation based on coordinates
        if(transCoords1.x === transCoords2.x){roadInfo.rotation = "rotate(90)"}
        else {
          if(transCoords1.y > transCoords2.y){
            if(transCoords1.x > transCoords2.x){roadInfo.rotation = "rotate(-30)"}
            else {roadInfo.rotation = "rotate(30)"}
          }
          else if(transCoords1.y < transCoords2.y){
            if(transCoords1.x > transCoords2.x){roadInfo.rotation = "rotate(30)"}
            else {roadInfo.rotation = "rotate(-30)"}
          }
        }

        roadArray.push(roadInfo);
      }
    })
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
    let info = [];
    const settlements = this.props.settlements;
    //const userId = moves[0].userId;

    //const color = this.state.playerColors.map((el) => el.key().userId === userId? el.valueOf(): "");

    settlements.map((settlement) => info.push({setY: settlement.y, setX: settlement.x}));

    return info;
  }

  getMoves(){
    let info = [];
    const moves = this.props.moves;
    //userId needed to set color
    //const userId = moves[0].userId;

    //if move.building exists and the building type is settlement then add the move coordinate to info for each possible move, else do nothing ("")
    moves.map((move) => move.building?
      (move.building.buildingType === "SETTLEMENT" ?
      info.push(
        {moveY: move.building.coordinates[0].y, moveX: move.building.coordinates[0].x, moveID: move.moveId}
        )
      : "")
      : "");

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
      <div className={'game-bg'}>
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
                {...this.coordTrans({x: tile.x, y : tile.y})}
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
              {this.props.moves && this.props.moves.length !== 0 && this.makeBuildableRoads().map(
                (road) => <Road {...road} />
              ) }

              {/*{this.createInvisibleRoad()}
            {this.createInvisibleSettlement()}*/}

              {this.props.moves && this.props.moves.length !==0 && this.getMoves().map(
                (move) => <Settlement
                  y = {move.moveY}
                  x = {move.moveX}
                  moveId = {move.moveID}
                />)}

              {this.props.settlements && this.props.settlements !==0 &&this.getSettlements().map(
                (settlement) => <Settlement
                  y = {settlement.setY}
                  x = {settlement.setX}
                />)}

            </div>

          </div>
        </div>
      </div>
    );
  }
}
