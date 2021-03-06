import React from "react";
import {Modal} from 'react-responsive-modal';
import DevCard from "./DevCard";

export default class UseDevCards extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      open: false,
    };
    this.openModalTrade = this.openModalTrade.bind(this);
    this.closeModalTrade = this.closeModalTrade.bind(this);
  }


  openModalTrade(){
    this.setState({open: true})
  }

  closeModalTrade(){
    this.setState({open: false})
  }

  moveChecker() {
    let i = 0;
    let arr = [];
    while (i < this.props.moves.length) {
      if (arr.includes(this.props.moves[i].moveName) === false)
        arr.push(this.props.moves[i].moveName);
      i++;
    }

    return arr.includes("CardMove");
  }

  getDevMoves(){
    const info = [];
    const moves = this.props.moves;
    moves.map((move)=> {
      if (move.moveName === "CardMove") {
        info.push({moveId: move.moveId, devType : move.developmentCard.developmentType})
      }
    });
    return info;
  }




  render(){
    const { open } = this.state;
    const bg = {
      modal: {
        background: "beige"
      }
    };
    return(
      <div>
        <button
          className ={`actionBoxButton ${this.moveChecker() === false ? "actionBoxButtonGrey":''}`}
          onClick={this.openModalTrade}
          disabled={this.moveChecker() === false}
        >Use dev cards
        </button>

        <Modal open={open} onClose={this.closeModalTrade} blockScroll={false} styles={bg}>
          <h2 style={{textAlign: "center", fontWeight: 'bold'}}>These are your development cards!</h2>


          {this.props.moves && this.props.moves !== "emptyMoves" && this.getDevMoves().map((info) =>
            <DevCard {...info} gameId = {this.props.gameId} moves = {this.props.moves} open={this.state.open} onClose={this.closeModalTrade}/>
          )}

          {/*{this.props.moves && this.props.moves !== "emptyMoves" && this.moveChecker() ? "": <p style ={{textAlign: "center", marginTop: '60px'}}>No development cards left!</p>}*/}

        </Modal>
      </div>

    );
  }
}