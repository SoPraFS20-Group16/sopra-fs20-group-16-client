import React from 'react';
import { withRouter } from 'react-router-dom';
import Hexagon from "./Hexagon";

import {Row, Col, Container} from 'react-bootstrap';


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
           <Container>

               <Row >
                   <Col md="4">.col-md-6-sdfsssg
                       <Hexagon />
                       <Hexagon/>
                       <Hexagon/>

                   </Col>
               </Row>


               <Row>
                   <Col md="4">.col-md-
                       <Hexagon />
                       <Hexagon/>
                       <Hexagon/>
                       <Hexagon/>
                   </Col>

               </Row>
               <Row>
                   <Hexagon />
                   <Hexagon/>
                   <Hexagon/>
                   <Hexagon/>
                   <Hexagon/>


               </Row>
               <Row className="col1 col-lg-4 col-md-6 item col-xs-12">

                   <Hexagon />
                   <Hexagon/>
                   <Hexagon/>
                   <Hexagon/>

               </Row>
               <Row md="4">.col-md-nnnn4
                   <Hexagon />
                   <Hexagon/>
                   <Hexagon/>

               </Row>
           </Container>

        );
    }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Board);
