import React from "react";
import './style.css';
import 'react-responsive-modal/styles.css';
import Modal from 'react-modal';
import {api} from "../../helpers/api";

export default class StealMove extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      players: {},
    };
    props.players.map((pl) => {this.state.players[pl.userId] = pl.username})
  }

  async choosePlayer(e, moveId) {

    const requestBody = JSON.stringify({
      moveId: moveId,
    });

    await api.put("/games/" + this.props.gameId, requestBody);
    this.props.onClose()
  }

  render(){
    const { open } = this.state;
    return (
      <div>
        <Modal isOpen={this.props.open} onRequestClose={''} blockScroll={true}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <h4>Choose who you want to rob:</h4>
            {this.props.moves.map((move) =>
              <button
                  className={'button1'}
                  onClick={(e) => {this.choosePlayer(e, move.moveId)}}
                  style={{display:"flex"}}
              >
                <div
                    className={'playerColor'}
                    style={{backgroundColor: this.props.colors[move.victimId]}}
                />
                {this.state.players[move.victimId]}
              </button>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}
