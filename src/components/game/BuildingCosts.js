import React from "react";
import './style.css'
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
  return (
    <div className={'costsBox'}>
      <h4>
        Building costs
      </h4>

      <div className={'costs1'}>
        <div className={'costs2'}>
          <div>
            <img
              src={road}
              alt={''}
              style={{maxHeight:'25px', maxWidth:'25px'}}
            />
          </div>

          <div>
            <img
              src={village}
              alt={''}
              style={{maxHeight:'25px', maxWidth:'25px'}}
            />
          </div>

          <div>
            <img
              src={castle}
              alt={''}
              style={{maxHeight:'25px', maxWidth:'25px'}}
            />
          </div>

          <div>
            <img
              src={cards}
              alt={''}
              style={{maxHeight:'25px', maxWidth:'25px'}}
            />
          </div>

        </div>

        <div className={'costs2'}>
          <div>
            <img
              src={Lumber}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Brick}
              alt={''}
              style={{maxHeight:'25px'}}
            />
          </div>

          <div>
            <img
              src={Lumber}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Brick}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Wool}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Grain}
              alt={''}
              style={{maxHeight:'25px'}}
            />
          </div>

          <div>
            <img
              src={Grain}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Grain}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Ore}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Ore}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Ore}
              alt={''}
              style={{maxHeight:'25px'}}
            />
          </div>

          <div>
            <img
              src={Wool}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Grain}
              alt={''}
              style={{maxHeight:'25px'}}
            />
            <img
              src={Ore}
              alt={''}
              style={{maxHeight:'25px'}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}