import React from 'react';
import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Ore from '../../views/graphics/ore.png'
import Brick from '../../views/graphics/brick.png'
import Wool from '../../views/graphics/wool.png'
import {api} from "../../helpers/api";

export default class PlentyMove extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      firstRes: "",
      secondRes:"",
      count:0,
      imgSize:35
    };
    this.resetState = this.resetState.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.setResources = this.setResources.bind(this);
  }

  checkIfBothEmpty(){
    return (this.state.firstRes === "" && this.state.secondRes === "");
  }

  resetState(){
    this.setState({firstRes:"", secondRes : "", count: 0});
  }

  incrementCount(){
    this.setState({count: this.state.count + 1})
  }


  setResources(resource){
    let moveId;
    const moves = this.props.moves;

    if (this.state.count === 0){
      if(this.state.firstRes === ""){
        this.setState({firstRes: resource})
      }
    }

    if (this.state.count ===1){
      if(this.state.firstRes !== "" && this.state.secondRes ==="" && this.state.count ===1){
        this.setState({secondRes: resource})
      }
    }

    if(this.state.count === 2){
      if(this.state.firstRes !== "" && this.state.secondRes !== ""){
        moves.map((move) =>{
          if(move.plentyType1 === this.state.firstRes && move.plentyType2 === this.state.secondRes){
            moveId = move.moveId;
          }
        });
        return async () => await api.put("/games/" + this.props.gameId, JSON.stringify({moveId: moveId})) && this.resetState();
      }
    }
    this.incrementCount();
  }




  render(){
    const {imgSize} = this.state;
    return(
      <div className={'plentyAndMonopoly'} style={{justifyContent: "center"}}>
        <h5> <b>Select 2 resources! </b></h5>

        <div>
            <button
              style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
              onClick={this.setResources("LUMBER")}
              disabled = {this.checkIfBothEmpty() === true}
            >
              <img style={{height: imgSize, textAlign: 'center'}} src = {Lumber} alt = ""/>
            </button>

            <button
              style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
              onClick={this.setResources("GRAIN")}
              disabled={this.checkIfBothEmpty() === true}
            >
              <img style={{height: imgSize, textAlign:'center'}} src = {Grain} alt = ""/>
            </button>
        </div>

        <div>
          <button
            style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
            onClick={this.setResources("BRICK")}
            disabled={this.checkIfBothEmpty() === true}
          >
            <img style={{height: imgSize, textAlign:'center'}} src = {Brick} alt = ""/>
          </button>


          <button
            style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
            onClick={this.setResources("WOOL")}
            disabled={this.checkIfBothEmpty() === true}
          >
            <img style={{height: imgSize, textAlign:'center'}} src = {Wool} alt = ""/>
          </button>
        </div>

        <div>
          <button
            style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
            onClick={this.setResources("ORE")}
            disabled={this.checkIfBothEmpty() === true}
          >
            <img style={{height: imgSize, textAlign:'center'}} src = {Ore} alt = ""/>
          </button>
        </div>
      </div>

    )
  }


}