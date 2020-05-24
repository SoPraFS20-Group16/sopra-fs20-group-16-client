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
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : 'beige',
      },
      overlay: {zIndex: 10}
    };
    return (
      <div>
        <Modal
          isOpen={this.props.open}
          blockScroll={true}
          style={customStyles}
          ariaHideApp={false}
        >
          <div
            style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"flex-start",
            }}>
            <h4>Choose who you want to rob:</h4>
            {this.props.moves[0].moveName === 'StealMove' ? this.props.moves.map((move, i) =>
              <button
                  className={'button1'}
                  onClick={(e) => {this.choosePlayer(e, move.moveId)}}
                  style={{display:"flex"}}
                  key={i}
              >
                <div
                    className={'playerColor'}
                    style={{backgroundColor: this.props.colors[move.victimId]}}
                />
                {this.state.players[move.victimId]}
              </button>
            ) :
              <div>
                <p>Looking for someone to rob...</p>
                {/*setTimeout(() => {this.props.onClose();}, 4500)*/}
              </div>
            }
          </div>
        </Modal>
      </div>
    );
  }
}
