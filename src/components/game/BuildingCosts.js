import React from "react";
import './style.css'
import ReactTooltip from "react-tooltip";

import road from "../../views/graphics/road2.png"
import village from '../../views/graphics/village2.png'
import castle from '../../views/graphics/castle.png'
import cards from '../../views/graphics/cards.png'

import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Wool from '../../views/graphics/wool.png'
import Brick from '../../views/graphics/brick.png'
import Ore from '../../views/graphics/ore.png'

export default function buildingCosts() {

  const iconSize = '25px'

  return (
    <div className={'innerBox'}>
      <div className={'boxTitle'}>
        Building costs
      </div>

      <ReactTooltip type={'light'} delayShow={'180'}/>

      <div className={'costs1'}>
        <div className={'costs2'}>
          <div data-tip={'Road'}>
            <img
              src={road}
              alt={''}
            />
          </div>

          <div data-tip={'Settlement'}>
            <img
              src={village}
              alt={''}
            />
          </div>

          <div data-tip={'City'}>
            <img
              src={castle}
              alt={''}
            />
          </div>

          <div data-tip={'Development card'}>
            <img
              src={cards}
              alt={''}
            />
          </div>

        </div>

        <div className={'costs2'}>
          <div>
            <img
              src={Lumber}
              alt={''}
              style={{zIndex: 1}}
            />
            <img
              src={Brick}
              alt={''}
              style={{zIndex: 0, left: '-40%'}}
            />
          </div>

          <div>
            <img
              src={Lumber}
              alt={''}
              style={{zIndex: 3}}
            />
            <img
              src={Brick}
              alt={''}
              style={{zIndex: 2, left: '-40%'}}
            />
            <img
              src={Wool}
              alt={''}
              style={{zIndex: 1, left: '-80%'}}
            />
            <img
              src={Grain}
              alt={''}
              style={{zIndex: 0, left: '-120%'}}
            />
          </div>

          <div>
            <img
              src={Grain}
              alt={''}
              style={{zIndex: 4}}
            />
            <img
              src={Grain}
              alt={''}
              style={{zIndex: 3, left: '-40%'}}
            />
            <img
              src={Ore}
              alt={''}
              style={{zIndex: 2, left: '-80%'}}
            />
            <img
              src={Ore}
              alt={''}
              style={{zIndex: 1, left: '-120%'}}
            />
            <img
              src={Ore}
              alt={''}
              style={{zIndex: 0, left: '-160%'}}
            />
          </div>

          <div>
            <img
              src={Wool}
              alt={''}
              style={{zIndex: 2}}
            />
            <img
              src={Grain}
              alt={''}
              style={{zIndex: 1, left: '-40%'}}
            />
            <img
              src={Ore}
              alt={''}
              style={{zIndex: 0, left: '-80%'}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}