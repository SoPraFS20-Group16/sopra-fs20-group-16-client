import React from "react";
import { api, handleError } from "../../helpers/api";
import './style.css';

export default function ActionBox(props){

  return(
    <div className={'actionBox'}>
      <h4> Action Box</h4>

      <div>
        <button className={'actionBoxButton'}
        /*onClick={
        }*/
        >
        Build
        </button>
      </div>

      <div>
        <button className={'actionBoxButton'}
        onClick={
          props.moves.map((move) => move.moveName === "PassMove"?
            async () => await api.put("/games/" + localStorage.getItem("gameID"), move.moveId): "")
        }
        >
          Pass
        </button>
      </div>

      <div>
        <button className={'actionBoxButton'}>
          Buy developement cards
        </button>
      </div>
    </div>
  )
}