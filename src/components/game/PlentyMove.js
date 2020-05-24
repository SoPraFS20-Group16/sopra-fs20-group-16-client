import React from 'react';
import Miner from '../../views/graphics/miner.png'
import Farmer from '../../views/graphics/farmer.png'
import LumberJack from '../../views/graphics/lumberjack.png'
import {api} from "../../helpers/api";
import ReactTooltip from "react-tooltip";

export default function PlentyMove(props){
    const imgSize = 45;

    function selectPlentyType(type){

      let moveId;
      const moves = props.moves;

      moves.map((move) => {
        if(move.plentyType === type){
          moveId = move.moveId;
        }
      });

      return moveId;
    }

    return(
        <div className={'plenty'}>
          <h5> <b>Pick a Type!</b> </h5>
            <ReactTooltip type={'light'} delayShow={'180'}/>

          <div>
            <button
                data-tip = {"Miner: 2x Ore & 2x Brick"}
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("MINER")}))}
            >
              <img style={{height: imgSize, textAlign: 'center', marginRight: '10px', border: '1px solid black', borderRadius: '26px'}} src = {Miner} alt = ""/>
            </button>

            <button
                data-tip = {"Farmer: 2x Grain & 2x Wool"}
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("FARMER")}))}
            >
              <img style={{height: imgSize, border: '1px solid black', borderRadius: '26px'}} src = {Farmer} alt = ""/>
            </button>
          </div>

          <div>
            <button
                data-tip = {"Lumberjack: 5x Lumber"}
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("LUMBERJACK")}))}
            >
              <img style={{height: imgSize, border: '1px solid black', borderRadius: '26px'}} src = {LumberJack} alt = ""/>
            </button>

          </div>

        </div>

    )
}
