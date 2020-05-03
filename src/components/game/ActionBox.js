import React from "react";
import { api, handleError } from "../../helpers/api";
import './style.css';

export default function ActionBox(props) {

  return (
    <div className={'actionBox'}>
      <div>
        <button className={'actionBoxButton'}
                disabled={props.moves === "emptyMoves"}
                onClick={
                  async () => await api.get("/games/" + props.gameId)
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
                    async () => await api.put("/games/" + props.gameId,
                      JSON.stringify({moveId: props.moves[0].moveId})) : ""
                }
        >
          Roll dice
        </button>
      </div>

      <div>
        <button className={'actionBoxButton'}
                disabled= {props.moves === "emptyMoves"}
        >
          Dev cards
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
          Pass turn
        </button>
      </div>
    </div>
  )
}