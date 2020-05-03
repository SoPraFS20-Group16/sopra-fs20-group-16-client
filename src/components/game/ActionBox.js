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

  return (
    <div className={'actionBox'}>
      <div>
        <button className={`actionBoxButton ${props.moves[0].moveName !== "BuildMove"  ? "actionBoxButtonGrey" : ''}`}
                disabled={props.moves === "emptyMoves"}
                onClick={
                  props.handler
                }
        >
          Build
        </button>
      </div>

      <div>
        <button className={`actionBoxButton ${props.moves[0].moveName !== "DiceMove"  ? "actionBoxButtonGrey" : ''}`}
                disabled={props.moves === "emptyMoves"}
                onClick={
                  props.moves[0].moveName === "DiceMove"  ?
                    async () => await api.put("/games/" + props.gameId,
                      JSON.stringify({moveId: props.moves[0].moveId})) : ""
                }
        >
          Roll dice
        </button>
      </div>

      <div>
        <button className={`actionBoxButton ${props.moves[0].moveName !== "DevMove"  ? "actionBoxButtonGrey" : ''}`}
                disabled= {props.moves === "emptyMoves"}
        >
          Dev cards
        </button>
      </div>

      <div>
        <button className={`actionBoxButton ${props.moves[0].moveName !== "FirstPassMove" && props.moves[0].moveName !== "PassMove"  ? "actionBoxButtonGrey" : ''}`}
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