import React from 'react';
import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Ore from '../../views/graphics/ore.png'
import Brick from '../../views/graphics/brick.png'
import Wool from '../../views/graphics/wool.png'
import {api} from "../../helpers/api";

export default function PlentyMove(props){
    const imgSize = 35;

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
        <div className={'plentyAndMonopoly'}>
          <h5> <b>Pick a Type!</b> </h5>

          <div>
            <button
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("MINER")}))}
            >
              <img style={{height: imgSize, textAlign: 'center'}} src = {Brick} alt = ""/>
            </button>

            <button
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("FARMER")}))}
            >
              <img style={{height: imgSize}} src = {Grain} alt = ""/>
            </button>
          </div>

          <div>
            <button
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("LUMBERJACK")}))}
            >
              <img style={{height: imgSize}} src = {Lumber} alt = ""/>
            </button>

          </div>

        </div>

    )
}
