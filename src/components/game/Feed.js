import React from "react";
import './style.css';
import ScrollableFeed from "react-scrollable-feed";

export default function feed(props) {

  const movesDesc = {
    'KnightMove': 'has moved the thief',
    'MonopolyMove': 'used a monopoly card',
    'PlentyMove' : 'used a card of plenty (not the valley)',
    'RoadProgressMove': 'used a road progress card',
    'StealMove': 'stole a resource', // from whom?
    'FirstPassMove': 'passed the turn',
    'FirstRoadMove': 'has built a starting road',
    'FirstSettlementMove': 'has built a starting settlement',
    'BuildMove': 'has built something', // add what?
    'CardMove': 'used a card',
    'DiceMove': 'rolled the dice', // add result?
    'Move': 'has got some tight moves', // ?
    'PassMove': 'passed the turn',
    'PurchaseMove': 'is rich and bought a development card',
    'StartMove': 'has started the game, good luck!',
    'TradeMove': 'traded some resources with the bank',
  }

  return (
    <div className={'feedContainer'}>
      <ScrollableFeed forceScroll={true} className={'feedBox'}>
        {props.history.map((move, i) =>
          <div key={i} style={{padding: '8px 0 0', display:"flex"}}>
            <div className={'playerColorSmall'} style={{backgroundColor: props.colors[move.userId]}}/>
            <div>
              <b>{move.username} </b> {movesDesc[move.moveName]}
            </div>
          </div>
          )}
      </ScrollableFeed>
    </div>
  )
}