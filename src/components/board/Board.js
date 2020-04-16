import React from 'react';
import { withRouter } from 'react-router-dom';
import Hexagon from "./Hexagon";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hexagons: Array(10).fill(null).map(row => new Array(5).fill(null))
        };
    }

    renderHexagon(i,j){
        return <Hexagon value={this.state.hexagons[i][j]}
        />

    }


    componentDidMount() {}

    render() {
        return (
           <div>

               <div className="hexagon-row">
                   {this.renderHexagon(2,0)}
                   {this.renderHexagon(4,0)}
                   {this.renderHexagon(6,0)}
               </div>

               <div className="hexagon-row1">
                   {this.renderHexagon(1,1)}
                   {this.renderHexagon(3,1)}
                   {this.renderHexagon(5,1)}
                   {this.renderHexagon(7,1)}


               </div>
               <div className="hexagon-row">
                   {this.renderHexagon(0,2)}
                   {this.renderHexagon(2,2)}
                   {this.renderHexagon(4,2)}
                   {this.renderHexagon(6,2)}
                   {this.renderHexagon(8,2)}


               </div>
               <div className="hexagon-row">

                   {this.renderHexagon(1,3)}
                   {this.renderHexagon(3,3)}
                   {this.renderHexagon(5,3)}
                   {this.renderHexagon(7,3)}

               </div>
               <div className="hexagon-row">

                   {this.renderHexagon(2,4)}
                   {this.renderHexagon(4,4)}
                   {this.renderHexagon(6,4)}

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
