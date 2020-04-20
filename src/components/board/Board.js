import React from 'react';
import { withRouter } from 'react-router-dom';
import Hexagon from "./Hexagon";

import {Row, Col, Container} from 'react-bootstrap';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    componentDidMount() {}

    render() {
        return (
           <Container>

               <Row >
                   <Col className="col1 col-lg-4 col-md-6 item col-xs-12">
                       <Hexagon />
                       <Hexagon/>
                       <Hexagon/>

                   </Col>
               </Row>


               <Row>
                   <Col className="col1 col-lg-4 col-md-6 item col-xs-12">
                       <Hexagon />
                       <Hexagon/>
                       <Hexagon/>
                       <Hexagon/>
                   </Col>

               </Row>

               <Row>
                   <Col className="col1 col-lg-4 col-md-6 item col-xs-12">
                   <Hexagon />
                   <Hexagon/>
                   <Hexagon/>
                   <Hexagon/>
                   <Hexagon/>
                   </Col>

               </Row>
               <Row>
                   <Col className="col1 col-lg-4 col-md-6 item col-xs-12">

                   <Hexagon />
                   <Hexagon/>
                   <Hexagon/>
                   <Hexagon/>
                   </Col>

               </Row>
               <Row>
                  <Col className="col1 col-lg-4 col-md-6 item col-xs-12">
                   <Hexagon />
                   <Hexagon/>
                   <Hexagon/>
                  </Col>

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
