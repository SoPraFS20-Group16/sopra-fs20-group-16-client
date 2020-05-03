import React from "react";
import { api, handleError } from "../../helpers/api";
import './style.css';
import NewSettlement from "../board/NewSettlement";
import NewRoad from "../board/NewRoad";
import NewCity from "../board/NewCity";



const isClassDisabled = (move)=>{

}

export default function ActionBox(props) {

  return (
    <div className={'actionBox'}>
      <div>
        <button className={'actionBoxButton'}
                disabled={props.moves === "emptyMoves"}

                /*onClick={}*/
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
        <button className={`actionBoxButton ${(
            props.moves[0].moveName === "DiceMove" 
            || props.moves[0].moveName === "PassMove"
        ) ? "actionBoxButtonGrey" : ''}`}
                disabled= {props.moves === "emptyMoves"}
        >
          Dev cards
        </button>
      </div>

      <div>
        <button className={`actionBoxButton ${(
            props.moves[0].moveName === "DiceMove"
            || props.moves[0].moveName === "x"
        ) ? "actionBoxButtonGrey" : ''}`}
                disabled= {props.moves === "emptyMoves"}
                onClick={
                  props.moves[0].moveName === "FirstPassMove" || props.moves[0].moveName === "PassMove" ?
                    async () => await api.put("/games/" + props.gameId,
                      JSON.stringify({moveId: props.moves[0].moveId})) : ""
                }
        >
          Pass turn
        </button>
      </div>
    </div>
  )
}