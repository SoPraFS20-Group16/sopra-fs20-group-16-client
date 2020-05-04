import React from "react";
import { api, handleError } from "../../helpers/api";
import './style.css';


const isClassDisabled = (move)=>{

}

export default function ActionBox(props) {

  async function pass() {
    const moves = props.moves;
    let passMove;

    moves.map((move) => {
      if(move.moveName === "FirstPassMove" || move.moveName === "PassMove") {
        passMove = {moveId: move.moveId}
      }
    });

    await api.put("/games/" + props.gameId, JSON.stringify({moveId: passMove.moveId}))
  }

  async function rollDice(){
    if(props.moves[0].moveName === "DiceMove") {
      await api.put("/games/" + props.gameId, JSON.stringify({moveId: props.moves[0].moveId}))
    }
  }

  const checkPass = () => {
      var i;
      let className_ = 'actionBoxButton';
      for(i=0; i < props.moves.length; i++) {
          if((props.moves[i].moveName !== "FirstPassMove") && (props.moves[i].moveName !== "PassMove")) {
              className_ = 'actionBoxButtonGrey';
          }
      }
        return className_;
    }

    const checkDice = () => {
        var i;
        let className_ = 'actionBoxButton';
        for(i=0; i < props.moves.length; i++) {
            if((props.moves[i].moveName !== "DiceMove")) {
                className_ = 'actionBoxButtonGrey';
            }
        }
        return className_;
    }

    const checkBuild = () => {
        var i;
        let className_ = 'actionBoxButton';
        for(i=0; i < props.moves.length; i++) {
            if((props.moves[i].moveName !== "FirstSettlementMove") && (props.moves[i].moveName !== "BuildMove")&& (props.moves[i].moveName !== "FirstRoadMove")) {
                className_ = 'actionBoxButtonGrey';
            }
        }
        return className_;
    }

    const checkDev = () => {
        var i;
        let className_ = 'actionBoxButton';
        for(i=0; i < props.moves.length; i++) {
            if((props.moves[i].moveName !== "DevMove")){
                className_ = 'actionBoxButtonGrey';
            }
        }
        return className_;
    }

  return (
    <div className={'actionBox'}>
      <div>
        <button className={checkBuild()}
                disabled={props.moves === "emptyMoves"}
                onClick={
                  props.handler
                }
        >
          Build
        </button>
      </div>

      <div>
        <button className={checkDice()}
                disabled={props.moves === "emptyMoves"}
                onClick={props.moves !=="emptyMoves"?
                    rollDice : ""
                }
        >
          Roll dice
        </button>
      </div>

      <div>
        <button className={checkDev()}
                disabled= {props.moves === "emptyMoves"}
        >
          Dev cards
        </button>
      </div>

      <div>
        <button className={checkPass()}
                disabled= {props.moves === "emptyMoves"}
                onClick={
                  props.moves !== "emptyMoves"? pass : ""
                }
        >
          Pass turn
        </button>
      </div>
    </div>
  )
}