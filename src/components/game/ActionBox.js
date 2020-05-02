import React from "react";
import { api, handleError } from "../../helpers/api";
import './style.css';

export default function ActionBox(props) {

  return (
    <div className={'actionBox'}>
      <h4> Action Box</h4>

      <div>
        <button className={'actionBoxButton'}
                onClick={
                  async () => await api.get("/games/" + localStorage.getItem("gameID"))
                }
        >
          Build
        </button>
      </div>

      <div>
        <button className={'actionBoxButton'}
                onClick={
                  props.moves[0].moveName === "FirstPassMove" || props.moves[0].moveName === "PassMove" ?
                    async () => await api.put("/games/" + localStorage.getItem("gameID"),
                      JSON.stringify({moveId: props.moves[0].moveId})) : ""
                }
        >
          Pass
        </button>
      </div>

      <div>
        <button className={'actionBoxButton'}>
          Buy development cards
        </button>
      </div>
    </div>
  )
}