import React from "react";
import './style.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {api} from "../../helpers/api";

export default class StealMove extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      open: true,
      players: {},
    };
    props.players.map((pl) => {this.state.players[pl.userId] = pl.username})
  }

/*  onOpenModal = () => {
    this.setState({ open: true });
  };*/

  onCloseModal = () => {
    this.setState({ open: false });
  };

  async choosePlayer(moveId) {

    const requestBody = JSON.stringify({
      moveId: moveId,
    });

    await api.put("/games/" + this.props.gameId, requestBody);
  }

  render(){
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={''} blockScroll={true}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <h4>Choose who you want to rob:</h4>
            {this.props.moves.map((move) =>
              <button className={'button1'} onClick={this.choosePlayer(move.moveId)} style={{display:"flex"}}>
                <div className={'playerColor'} style={{backgroundColor: this.props.colors[move.victimId]}}/>
                {this.state.players[move.victimId]}
              </button>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}
