import React from "react";

import Lumber from '../../views/graphics/lumber.png'
import Grain from '../../views/graphics/grain.png'
import Wool from '../../views/graphics/wool.png'
import Brick from '../../views/graphics/brick.png'
import Ore from '../../views/graphics/ore.png'

import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";

export default function ResourceList(props){
  return (
    <Container style={{
      paddingTop: "20px"
    }}>
      <Row>
        <Col>
          <h3>Lumber {"  "}
            <img style={{height: 25}} src={Lumber} alt=""/> :
            {props.numLumber}
          </h3>


          <h3>Grain {"  "}
            <img style={{height: 25}} src={Grain} alt=""/> :
            {props.numGrain}
          </h3>

          <h3>Wool {"  "}
            <img style={{height: 25}} src={Wool} alt=""/> :

            {props.numWool}
          </h3>

          <h3>Brick {"  "}
            <img style={{height: 25}} src={Brick} alt=""/> :
            {props.numBrick}
          </h3>
          <h3>Ore {"  "}
            <img style={{height: 25}} src={Ore} alt=""/> :
            {props.numOre}
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
