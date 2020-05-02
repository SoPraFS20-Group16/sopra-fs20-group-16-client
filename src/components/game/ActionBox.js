import React from "react";
import { api, handleError } from "../../helpers/api";
import './style.css';

export default function ActionBox(props) {

  return (
    <div className={'actionBox'}>
      <h4> Action Box</h4>

      <div>
        <button className={'actionBoxButton'}
                disabled={props.moves === "emptyMoves"}
                onClick={
                  async () => await api.get("/games/" + localStorage.getItem("gameID"))
                }
        >
          Build
        </button>
      </div>

      <div>
        <button className={'actionBoxButton'}
                disabled={props.moves === "emptyMoves"}
                onClick={
                  props.moves[0].moveName === "DiceMove"  ?
                    async () => await api.put("/games/" + localStorage.getItem("gameID"),
                      JSON.stringify({moveId: props.moves[0].moveId})) : ""
                }
        >
          Roll Dice
        </button>
      </div>



      <div>
        <button className={'actionBoxButton'}
                disabled={props.moves === "emptyMoves"}
                onClick={
                  props.moves[0].moveName === "FirstPassMove" || props.moves[0].moveName === "PassMove" ?
                    async () => await api.put("/games/" + props.gameId,
                      JSON.stringify({moveId: props.moves[0].moveId})) : ""
                }
        >
          Pass
        </button>
      </div>

      <div>
        <button className={'actionBoxButton'}
                disabled= {props.moves === "emptyMoves"}
        >
          Buy development cards
        </button>
      </div>
    </div>
  )
}