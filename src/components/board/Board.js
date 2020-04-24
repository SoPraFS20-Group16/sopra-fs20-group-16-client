import React from 'react';
import { withRouter } from 'react-router-dom';
import Hexagon from "./Hexagon";
import{Table,Row,Col} from "react-bootstrap";

class Board extends React.Component {
    constructor(props) {
        super(props);
    }





    render() {
        return (
            <div>



            </div>

        );
    }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Board);