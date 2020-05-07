import React from "react";
import {ModalContainer, ModalDialog} from 'react-modal-dialog-react16';

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
        info.push({give: move.neededType, receive: move.offeredType})
      }
    });
    return info;
    }

  render(){
    return(
      <div onClick={this.handleClick}>
        {
          this.state.isShowingModal &&
          <ModalContainer onClose={this.handleClose}>
            <ModalDialog onClose={this.handleClose}>
              {this.props.moves && this.props.moves !== "emptyMoves" && this.getTradeInfo().map((info) =>
                <div>
                  <t> 1x {info.receive} for 4x{info.give}</t>
                </div>

              )}
            </ModalDialog>
          </ModalContainer>
        }
      </div>

    );
  }
}