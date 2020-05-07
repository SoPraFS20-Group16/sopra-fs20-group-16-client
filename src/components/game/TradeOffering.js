import React from "react";
import {ModalContainer, ModalDialog} from 'react-modal-dialog-react16';
import Offer from "./Offer";

export default class TradeOffering extends React.Component{
  constructor(props) {
    super();
    this.state={
      isShowingModal: false,
    }
  }

  handleClick = () => this.setState({isShowingModal: true});
  handleClose = () => this.setState({isShowingModal: false});

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
    return(
      <button
        className ={`actionBoxButton ${this.moveChecker().includes("TradeMove") === false ? "actionBoxButtonGrey":''}`}
        onClick={this.handleClick}
        disabled={this.moveChecker().includes("TradeMove") === false}>
        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose}>
            <ModalDialog onClose={this.handleClose} style ={{backgroundColor: 'beige'}}>
              <h2>Offers</h2>

              {this.props.moves && this.props.moves !== "emptyMoves" && this.getTradeInfo().map((info) =>
                <Offer {...info} gameId = {this.props.gameId}/>
              )}
            </ModalDialog>
          </ModalContainer>
        }
       Trade
      </button>

    );
  }
}