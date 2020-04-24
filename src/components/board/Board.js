import React, {HTMLAttributes as state} from 'react';
import {withRouter} from 'react-router-dom';

import Hexagon from "react-svg-hexagon";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      streetColor: "yellow",

      /*
      hexCoords: [
          {03: {200,600}},
          {01: "100x200"}
      ],

      cityCoords : {
          {}
      },

      streetCords : {
          {}
      }

       */
    }
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({[key]: value});
  }

  render() {
    return (
      <div className="Board">
        <div
          style={{
            width: 500,
            height: 500,
            backgroundColor: "blue",
            position: "relative"
          }}
        >

          <div style={{position: "absolute", right: 0}}>
            <Hexagon
              fill="green"
              side={50}
              stroke="black"
              strokeWidth={1}
              radius={5}
            />
          </div>
          <div style={{position: "absolute", right: 90}}>
            <Hexagon
              fill="green"
              side={50}
              stroke="black"
              strokeWidth={1}
              radius={5}
            />
          </div>
          <div style={{position: "absolute", right: 180}}>
            <Hexagon
              fill="green"
              side={50}
              stroke="black"
              strokeWidth={1}
              radius={5}
            />
          </div>
          <div style={{position: "absolute", right: 135, top: 80}}>
            <Hexagon
              fill="green"
              side={50}
              stroke="black"
              strokeWidth={1}
              radius={5}
            />
          </div>
          <div style={{position: "absolute", right: 45, top: 80}}>
            <Hexagon
              side={50}
              stroke="black"
              strokeWidth={1}
              radius={5}
              render={({ClipPath, Polygon, Content, Svg}) => {
                return (
                  <Svg>
                    <ClipPath/>
                    <Polygon/>
                    <Content>
                      <img
                        style={{height: 100}}
                        /* The background image of the Hexagon can be adjusted with the img tag */
                        src="https://avatars3.githubusercontent.com/u/22457755?v=4"
                        alt=""
                      />
                    </Content>
                  </Svg>
                );
              }}
            />
          </div>

          {/* The following <div> below is reponsible for the placeholders which are above the tiles -> this is where your city, street, other elements are placed. */}
          <div
            style={{
              width: 500,
              height: 500,
              position: "absolute",
              /* The zIndex allows to adjust what is in the foreground and background */
              zIndex: 0
            }}
          >
            {/* This one below is a city placeholder */}
            <div
              style={{
                position: "absolute",
                top: 65,
                right: 75,
                fontSize: "0.5em",
                width: "20px",
                height: "20px",
                border: "2px solid black",
                borderRadius: "10px",
                backgroundColor: this.state.color
              }
              }
              onClick={() => alert("placeholder for city clicked")}
              onMouseEnter={() => this.handleInputChange('color', 'yellow')}
              onMouseLeave={() => this.handleInputChange('color', 'red')}
            />
            {/* This one below is a street placeholder */}
            <div
              style={{
                position: "absolute",
                top: 80,
                right: 85,
                transform: "rotate(150deg)",
                fontSize: "0.5em",
                width: "40px",
                height: "10px",
                border: "2px solid black",
                borderRadius: "10px",
                backgroundColor: this.state.streetColor
              }}
              onClick={() => alert("placeholder for street clicked")}
              onMouseEnter={() => this.handleInputChange('streetColor', 'yellow')}
              onMouseLeave={() => this.handleInputChange('streetColor', 'pink')}
            />
          </div>


        </div>
      </div>

    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Board);