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


  function moveChecker() {
      let i = 0;
      let arr = [];
      while (i < props.moves.length) {
          if (arr.includes(props.moves[i].moveName) === false)
              arr.push(props.moves[i].moveName);
          i++;
      }
      return arr
  }

  return (
    <div className={'actionBox'}>
      {/*<div>
          <button className={`actionBoxButton ${moveChecker().includes("FirstSettlementMove")=== false && 
          moveChecker().includes("FirstRoadMove")=== false && 
          moveChecker().includes("BuildMove")=== false ? "actionBoxButtonGrey":''}`}
                disabled={props.moves === "emptyMoves"}
                onClick={
                  props.handler
                }
        >
          Build
        </button>
      </div>*/}

      <div>
          <button className={`actionBoxButton ${moveChecker().includes("DiceMove") === false ? "actionBoxButtonGrey":''}`}
                disabled={props.moves === "emptyMoves"}
                onClick={props.moves !=="emptyMoves"?
                    rollDice : ""
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
          <button className={`actionBoxButton ${moveChecker().includes("PassMove")=== false && 
          moveChecker().includes("FirstPassMove")=== false ? "actionBoxButtonGrey":''}`}
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