import React from "react";
import Offer from "./Offer";
import {Modal} from 'react-responsive-modal';

export default class TradeOffering extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      open: false,
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  getTradeInfo(){
    const info = [];
    const moves = this.props.moves;
    moves.map((move)=> {
      if (move.moveName === "TradeMove") {
        info.push({give: move.offeredType, receive: move.neededType, moveId: move.moveId})
      }
    });
    return info;
    }

  moveChecker() {
    let i = 0;
    let arr = [];
    while (i < this.props.moves.length) {
      if (arr.includes(this.props.moves[i].moveName) === false)
        arr.push(this.props.moves[i].moveName);
      i++;
    }
    return arr
  }

  render(){
    const { open } = this.state;
    return(
      <div>
        <button
          className ={`actionBoxButton ${this.moveChecker().includes("TradeMove") === false ? "actionBoxButtonGrey":''}`}
          onClick={this.onOpenModal}
          disabled={this.moveChecker().includes("TradeMove") === false}
        >
          Trade
        </button>

        <Modal open={open} onClose={this.onCloseModal} blockScroll={false}>
          <h2>Offers</h2>

          {this.props.moves && this.props.moves !== "emptyMoves" && this.getTradeInfo().map((info) =>
            <Offer {...info} gameId = {this.props.gameId}/>
          )}

        </Modal>
      </div>

    );
  }
}