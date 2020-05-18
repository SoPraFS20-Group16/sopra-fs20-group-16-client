import { api } from "../../helpers/api";
import React from "react";
import {Modal} from 'react-responsive-modal';


export default class DevCard extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      open: false,
    }
  }


  onOpenModal = () => {

    if(this.checkOpenModal()){
      this.setState({ open: true });
    }

  };


  checkOpenModal(){
    const moves = this.props.moves;

    moves.map((move) => {
      if(move.moveName === "PlentyMove" && move.moveName !== "MonopolyMove") {
        return true;
      }
    });
    return false;
  }


  onCloseModal = () => {
    this.setState({ open: false });
  };


  devType(){
    if(this.props.devType === "KNIGHT"){
      return <t>Knight Move</t>
    }

    if(this.props.devType === "MONOPOLYPROGRESS"){
      return <t>Monopoly Card</t>
    }

    if(this.props.devType === "PLENTYPROGRESS"){
      return <t>Get 2 Resources for free!</t>
    }


    if(this.props.devType === "ROADPROGRESS"){
      return <t>Buy 2 Free Streets!</t>
    }
  }


  chooseSpecificMove(){
    const moves = this.props.moves;
    let info = [];

    moves.map((move) => {
      if(move.moveName === "MonopolyMove"){
        info.push({})
      }

      if(move.moveName ==="PlentyMove"){
        info.push({plentyType1: move.plentyType1, plentyType2: move.plentyType2});
        return info.map((info) => <button> {info.plentyType1}  AND {info.plentyType2}</button>)
      }
    })
  }


  async useCard(){
    await api.put("/games/" + this.props.gameId, JSON.stringify({moveId: this.props.moveId}));

    this.onOpenModal();
  }


  render() {
    const {open} = this.state;
    return(
      <div>
        <button
          className = 'offerButton'
          style={{marginLeft: '100px'}}
          onClick = {async () => await api.put("/games/" + this.props.gameId, JSON.stringify({moveId: this.props.moveId}))}
        >
          {this.devType()}
        </button>

        {/*<Modal open={open} onClose={this.onCloseModal} blockScroll={false}>
          <h1>HI!</h1>
          {this.props.moves && this.props.moves !== "emptyMoves" && this.chooseSpecificMove()}
        </Modal>*/}
      </div>
    )
  }
}