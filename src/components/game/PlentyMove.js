import React from 'react';
import Lumber from '../../views/graphics/lumber.png'
import Pitchfork from '../../views/graphics/Pitchfork-232x300.png'
import {api} from "../../helpers/api";

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

          <div>
            <button
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("MINER")}))}
            >
              <img style={{height: imgSize, textAlign: 'center', marginRight: '10px', border: '1px solid black', borderRadius: '26px'}} src = "https://www.pngrepo.com/png/240392/180/miner.png" alt = ""/>
            </button>

            <button
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("FARMER")}))}
            >
              <img style={{height: imgSize, border: '1px solid black', borderRadius: '26px'}} src = "https://www.pngrepo.com/png/240410/180/farmer.png" alt = ""/>
            </button>
          </div>

          <div>
            <button
                style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
                onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectPlentyType("LUMBERJACK")}))}
            >
              <img style={{height: imgSize, border: '1px solid black', borderRadius: '26px'}} src = "https://www.pngrepo.com/png/240416/180/lumberjack.png" alt = ""/>
            </button>

          </div>

        </div>

    )
}
