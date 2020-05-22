import React from 'react';
import './style.css'
import Hex from "./Hex";
import Road from "./Road";
import NewRoad from "./NewRoad";
import Settlement from "./Settlement";
import NewSettlement from "./NewSettlement";
import NewCity from "./NewCity";
import City from "./City";
import HexThiefSelector from "./HexThiefSelector";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      streetColor: "yellow",
      radius: 50,
    };
  }


  componentDidMount() {}

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
  renderBuildableRoads() {
    let roadArray = [];

    let transCoords1, transCoords2, midCoords;

    this.props.moves.map((move) => {
      if(move.building !== undefined && move.building.buildingType === "ROAD") {

        let roadInfo = {
          midX:null,
          midY:null,
          color: this.props.playerColors[move.userId],
          rotation: "rotate(0deg)",
          moveId: null,
          isBuilt: false,
          gameId: this.props.gameId
        };

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
        if(transCoords1.x === transCoords2.x){roadInfo.rotation = "rotate(90deg)"}
        else {
          if(transCoords1.y > transCoords2.y){
            if(transCoords1.x > transCoords2.x){roadInfo.rotation = "rotate(30deg)"}
            else {roadInfo.rotation = "rotate(-30deg)"}
          }
          else if(transCoords1.y < transCoords2.y){
            if(transCoords1.x > transCoords2.x){roadInfo.rotation = "rotate(-30deg)"}
            else {roadInfo.rotation = "rotate(30deg)"}
          }
        }

        roadArray.push(roadInfo);
      }
    });
    // console.log('buildable road info array: ' + JSON.stringify(roadArray));
    return roadArray;
  }

  // Render roads that have already been built
  renderBuiltRoads() {
    const roadArray = [];

    let transCoords1, transCoords2, midCoords;

    this.props.roads.map((road) => {

      let roadInfo = {
        midX:null,
        midY:null,
        color: this.props.playerColors[road.userId],
        rotation: "rotate(0deg)",
        isBuilt: true,
      };

      // console.log("built road: " + JSON.stringify(road))

      // Transform road's coordinates to pixels
      transCoords1 = this.coordTrans({
        x:road.coordinates[0].x,
        y:road.coordinates[0].y
      });
      transCoords2 = this.coordTrans({
        x:road.coordinates[1].x,
        y:road.coordinates[1].y
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
      if(transCoords1.x === transCoords2.x){roadInfo.rotation = "rotate(90deg)"}
      else {
        if(transCoords1.y > transCoords2.y){
          if(transCoords1.x > transCoords2.x){roadInfo.rotation = "rotate(30deg)"}
          else {roadInfo.rotation = "rotate(-30deg)"}
        }
        else if(transCoords1.y < transCoords2.y){
          if(transCoords1.x > transCoords2.x){roadInfo.rotation = "rotate(-30deg)"}
          else {roadInfo.rotation = "rotate(30deg)"}
        }
      }

      roadArray.push(roadInfo);

    });
    return roadArray;
  }

  // Get information needed to render built settlements
  getSettlements(){
    let info = [];
    const settlements = this.props.settlements;

    settlements.map((settlement) => {
      if(settlements){

        let transCoords = this.coordTrans({
          x:settlement.coordinates[0].x,
          y:settlement.coordinates[0].y
        });

        info.push({y: transCoords.y,
          x: transCoords.x,
          isSetBuilt : true,
          colorSet: this.props.playerColors[settlement.userId]})
      }
    });
    return info;
  }

  // Get information needed to render buildable settlements
  getSettlementMoves(){
    let info = [];
    const moves = this.props.moves;

    //if move.building exists and the building type is settlement then add the move coordinate to info for each possible move, else do nothing ("")
    moves.map((move) => {
      if(move.building && move.building.buildingType === "SETTLEMENT"){

        let transCoords = this.coordTrans({
          x:move.building.coordinates[0].x,
          y:move.building.coordinates[0].y
        });

        info.push({
          y: transCoords.y,
          x: transCoords.x,
          moveId: move.moveId,
          isSetBuilt : false,
          colorSet: this.props.playerColors[move.userId],
          gameId : this.props.gameId
        })
      }
     });
    return info;
  }

  //get information needed to render buildable cities
  getCityMoves(){
    let info = [];
    const moves = this.props.moves;

    //if move.building exists and the building type is settlement then add the move coordinate to info for each possible move, else do nothing ("")
    moves.map((move) => {
      if(move.building && move.building.buildingType === "CITY"){

        let transCoords = this.coordTrans({
          x:move.building.coordinates[0].x,
          y:move.building.coordinates[0].y
        });

        info.push({
          y: transCoords.y,
          x: transCoords.x,
          moveId: move.moveId,
          isSetBuilt : false,
          colorSet: this.props.playerColors[move.userId],
          gameId : this.props.gameId
        })
      }
    });
    return info;
  }

  // Get information needed to render built cities
  getCities(){
    let info = [];
    const cities = this.props.cities;

    cities.map((city) => {
      if(city){

        let transCoords = this.coordTrans({
          x:city.coordinates[0].x,
          y:city.coordinates[0].y
        });

        info.push({y: transCoords.y,
          x: transCoords.x,
          isSetBuilt : true,
          colorSet: this.props.playerColors[city.userId]})
      }
    });
    return info;
  }


  createBoard(){
    const info =[];

    for(let i=0; i<=18; i++){
      const top = this.props.tiles[i].coordinates[0].y;
      const left = this.props.tiles[i].coordinates[1].x;
      const number = this.props.tiles[i].tileNumber;
      const type = this.props.tiles[i].type;
      const isRobber = this.props.tiles[i].robber;
      let tileId = null;
      let moveId = null;

      // If a seven was rolled, pass the tileID too:
      if(this.props.moves && this.props.moves.length !== 0 && this.props.moves[0].moveName === "KnightMove"){
       tileId = this.props.moves[i].tileId;
       moveId = this.props.moves[i].moveId;
      }

      info.push({
        x:this.coordTrans({y:top, x:left}).x,
        y:this.coordTrans({y:top, x:left}).y,
        number: number,
        type: type,
        moveId: moveId,
        tileId: tileId,
        isRobber: isRobber,
        gameId: this.props.gameId,
        side: this.state.radius,
      });

    }

    return info;
  }


  render() {
    return (
      <div className={'board'}>

        {this.props.tiles && this.props.tiles.length !== 0 && this.createBoard().map(
          (tile, key) => <Hex {...tile} key={key} />)}

        {/* The following <div> below is responsible for the placeholders which are above the tiles -> this is where your city, street, other elements are placed. */}
        <div
          style={{
            width: 433,
            height: 400,
            position: "absolute",
            /* The zIndex allows to adjust what is in the foreground and background */
            zIndex: 0
          }}
        >

          {this.props.tiles && this.props.tiles.length !== 0 && this.props.moves.length !== 0 && this.props.moves[0].moveName === "KnightMove" &&
          this.createBoard().map((tile, key) =>
            <HexThiefSelector {...tile} key={key} onOpenThief={this.props.onOpenThief}/>
            )}

          {this.props.moves && this.props.moves.length !== 0 && this.renderBuildableRoads().map(
            (road, key) => <NewRoad
              {...road}
              key={key}
            />
          )}

          {this.props.roads && this.props.roads.length !== 0 && this.renderBuiltRoads().map(
            (road, key) => <Road {...road} key={key}/>
          )}

          {this.props.moves && this.props.moves.length !==0 && this.getSettlementMoves().map(
            (move, key) => <NewSettlement {...move} key={key}/>
            )}

          {this.props.settlements && this.props.settlements !==0 &&this.getSettlements().map(
            (settlement, key) => <Settlement {...settlement} key={key}/>
            )}

          {this.props.moves && this.props.moves !== 0 && this.getCityMoves().map(
            (move, key) =><NewCity {...move} key = {key}/>
            )}

          {this.props.cities && this.props.cities !== 0 && this.getCities().map(
            (city, key) => <City {...city} key={key}/>
          )}

        </div>

      </div>

    );
  }
}
