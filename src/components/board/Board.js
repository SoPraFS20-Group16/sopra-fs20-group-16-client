import React from 'react';
import Hex from "./Hex";
import Road from "./Road";
import NewRoad from "./NewRoad";
import Settlement from "./Settlement";

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
  renderBuildableRoads() {
    let roadArray = [];

    let transCoords1, transCoords2, midCoords;

    this.props.moves.map((move) => {
      if(move.building !== undefined && move.building.buildingType === "ROAD") {

        let roadInfo = {
          midX:null,
          midY:null,
          color:'blue', //TODO make color user-dependent
          rotation: "rotate(0deg)",
          moveId: null,
          isBuilt: false,
        }

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
    })
    console.log('buildable road info array: ' + JSON.stringify(roadArray));
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
        color:'black', //TODO make color user-dependent
        rotation: "rotate(0deg)",
        isBuilt: true,
      }
      console.log("built road: " + JSON.stringify(road))

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

    })
    return roadArray;
  }


  getSettlements(){
    let info = [];
    const settlements = this.props.settlements;
    //const userId = moves[0].userId;

    //const color = this.state.playerColors.map((el) => el.key().userId === userId? el.valueOf(): "");

    settlements.map((settlement) => {
      if(settlements){

        let transCoords = this.coordTrans({
          x:settlement.coordinates[0].x,
          y:settlement.coordinates[0].y
        });

        info.push({y: transCoords.y, x: transCoords.x, isSetBuilt : true, colorSet: "orange"})

      }

    });

    return info;
  }

  getSettlementMoves(){
    let info = [];
    const moves = this.props.moves;
    //userId needed to set color
    //const userId = moves[0].userId;

    //if move.building exists and the building type is settlement then add the move coordinate to info for each possible move, else do nothing ("")
    moves.map((move) => {
      if(move.building && move.building.buildingType === "SETTLEMENT"){

        let transCoords = this.coordTrans({
          x:move.building.coordinates[0].x,
          y:move.building.coordinates[0].y
        });

          info.push({y: transCoords.y, x: transCoords.x, moveId: move.moveId, isSetBuilt : false, colorSet: "green"})
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
              (tile, key) => <Hex
                {...this.coordTrans({x: tile.x, y : tile.y})}
                number={tile.number}
                type={tile.tileType}
                key={key}
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

              {this.props.moves && this.props.moves.length !== 0 && this.renderBuildableRoads().map(
                (road, key) => <NewRoad {...road} key={key} />
              ) }

              {this.props.roads && this.props.roads.length !== 0 && this.renderBuiltRoads().map(
                (road, key) => <Road {...road} key={key}/>
              )}

              {this.props.moves && this.props.moves.length !==0 && this.getSettlementMoves().map(
                (move, key) => <Settlement
                  {...move}
                  key={key}
                />)}

              {this.props.settlements && this.props.settlements !==0 &&this.getSettlements().map(
                (settlement, key) => <Settlement
                  {...settlement}
                  key={key}
                />)}

            </div>

          </div>
        </div>
      </div>
    );
  }
}
