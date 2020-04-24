import React, {HTMLAttributes as state} from 'react';
import {withRouter} from 'react-router-dom';
import Hex from "./Hex";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      streetColor: "yellow",
    }
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({[key]: value});
  }


  // Transforms the normal/server coordinates to pixel coordinates
  coordTrans(props) {
    const x = props.x;
    const y = props.y;
    const r = props.radius;

    const xNew = x * Math.sqrt(Math.pow(r, 2) - Math.pow((r/2),2));
    let yNew;

    if(y % 2 === 0) {
      yNew = y * ((r + r/2)/2);
    }
    else {
      yNew = (y - 1) * ((r + r/2)/2) + r/2
    }

    return (
      {
        x: xNew,
        y: yNew
      }
    )

  }

  createBoard(){

    const hexes = [];

    for(let left = 2; left <= 6; left += 2) {
      hexes.push(<Hex {...this.coordTrans({x: left, y : 0, radius: 50})} />);
    }

    for(let left = 1; left <= 7; left += 2) {
      hexes.push(<Hex {...this.coordTrans({x: left, y : 2, radius: 50})} />);
    }

    for(let left = 0; left <= 9; left += 2) {
      hexes.push(<Hex {...this.coordTrans({x: left, y : 4, radius: 50})} />);
    }

    for(let left = 1; left <= 7; left += 2) {
      hexes.push(<Hex {...this.coordTrans({x: left, y : 6, radius: 50})} />);
    }

    for(let left = 2; left <= 6; left += 2) {
      hexes.push(<Hex {...this.coordTrans({x: left, y : 8, radius: 50})} />);
    }

    return hexes
  }


  render() {
    return (
      <html className={'game-bg'}>
        <div className="Board">
          <div
            style={{
              width: 433.0127,
              height: 800,
              position: "relative"
            }}
          >

            {this.createBoard()}
          </div>
        </div>
      </html>
    );
  }
}

