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
      imgSize:40
    }
  }


  checkIf2Selected(){
    return (this.state.LUMBER +
      this.state.GRAIN +
      this.state.BRICK +
      this.state.WOOL +
      this.state.WOOL) === 2;
  }

  setResources(resource){
    let moveId;
    const moves = this.props.moves;

    if(this.state.firstRes === ""){
      this.setState({firstRes: resource})
    }

    if(this.state.firstRes !== "" && this.state.secondRes ===""){
      this.setState({secondRes: resource})
    }

    if(this.state.firstRes !== "" && this.state.secondRes !== ""){
      moves.map((move) =>{
        if(move.plentyType1 === this.state.firstRes && move.plentyType2 === this.state.secondRes){
          moveId = move.moveId;
        }
      });
      return async () => await api.put("/games/" + this.props.gameId, JSON.stringify({moveId: moveId}));
    }
  }




  render(){
    const {imgSize} = this.state;
    return(
      <div style={{justifyContent: "center"}}>
        <h3>Click on 2 resources!</h3>
        <button
          style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
          onClick={this.setResources("LUMBER")}
          disabled = {this.checkIf2Selected()}
        >
          <img style={{height: imgSize, textAlign: 'center'}} src = {Lumber} alt = ""/>
        </button>

        <button
          style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
          onClick={this.setResources("GRAIN")}
          disabled={this.checkIf2Selected()}
        >
          <img style={{height: imgSize, textAlign:'center'}} src = {Grain} alt = ""/>
        </button>

        <button
          style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
          onClick={this.setResources("BRICK")}
          disabled={this.checkIf2Selected()}
        >
          <img style={{height: imgSize, textAlign:'center'}} src = {Brick} alt = ""/>
        </button>

        <button
          style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
          onClick={this.setResources("WOOL")}
          disabled={this.checkIf2Selected()}
        >
          <img style={{height: imgSize, textAlign:'center'}} src = {Wool} alt = ""/>
        </button>

        <button
          style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
          onClick={this.setResources("ORE")}
          disabled={this.checkIf2Selected()}
        >
          <img style={{height: imgSize, textAlign:'center'}} src = {Ore} alt = ""/>
        </button>
      </div>

    )
  }


}