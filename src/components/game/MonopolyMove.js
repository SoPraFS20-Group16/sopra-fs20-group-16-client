import React from 'react';
import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Ore from '../../views/graphics/ore.png'
import Brick from '../../views/graphics/brick.png'
import Wool from '../../views/graphics/wool.png'
import {api} from "../../helpers/api";

export default function MonopolyMove(props){
    const imgSize = 35;

    function selectResource(resource){
      let moveId;
      const moves = props.moves;

      moves.map((move) => {
        if(move.monopolyType === resource){
          moveId = move.moveId;
        }
        });
      return moveId;
      //await api.put("/games/" + props.gameId, JSON.stringify({moveId: moveId}));
    }

    return(
      <div className={'monopoly'}>
        <h5> <b>Pick a resource!</b> </h5>

        <div>
          <button
            style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
            onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectResource("LUMBER")}))}
          >
            <img style={{height: imgSize, textAlign: 'center'}} src = {Lumber} alt = ""/>
          </button>

          <button
            style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
            onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectResource("GRAIN")}))}
          >
            <img style={{height: imgSize}} src = {Grain} alt = ""/>
          </button>
        </div>

        <div>
          <button
            style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
            onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectResource("BRICK")}))}
          >
            <img style={{height: imgSize}} src = {Brick} alt = ""/>
          </button>

          <button
            style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
            onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectResource("WOOL")}))}
          >
            <img style={{height: imgSize}} src = {Wool} alt = ""/>
          </button>
        </div>

        <div>
          <button
            style={{justifyContent: "center", backgroundColor: "transparent", border: "1px solid transparent"}}
            onClick={async () => await api.put("/games/" + props.gameId, JSON.stringify({moveId: selectResource("ORE")}))}
          >
            <img style={{height: imgSize}} src = {Ore} alt = ""/>
          </button>
        </div>
      </div>

    )


}