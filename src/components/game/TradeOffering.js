import React from "react";
import Offer from "./Offer";
import {Modal} from 'react-responsive-modal';

export default class TradeOffering extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      open: false,
    };

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }


  onOpenModal(){
    this.setState({open: true})
  }

  onCloseModal(){
    this.setState({open: false})
  }



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
    return arr.includes("TradeMove")
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
          onClick={this.onOpenModal}
          disabled={this.moveChecker() === false}
        >
          Trade
        </button>

        <Modal open={open} onClose={this.onCloseModal} blockScroll={false} styles={bg}>
          <h2 style={{textAlign: "center", fontWeight: 'bold'}}>Offers</h2>

          {this.props.moves && this.props.moves !== "emptyMoves" && this.getTradeInfo().map((info) =>
            <Offer {...info} gameId = {this.props.gameId} open={this.state.open} onClose={this.onCloseModal}/>
          )}

          {/*{this.props.moves && this.props.moves !== "emptyMoves" && this.moveChecker()? "": <p style={{textAlign: "center", marginTop:'40px'}}>No trading moves left!</p>}*/}

        </Modal>
      </div>

    );
  }
}