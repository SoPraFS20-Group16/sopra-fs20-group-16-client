import React from "react";
import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";

export default function ResourceList() {
  return(
    <Container style={{
      paddingTop:"20px"
    }}>
      <Row>
        <Col>
          <p>Lumber</p>
          <p>Grain</p>
          <p>Wool</p>
          <p>Brick</p>
          <p>Ore</p>
        </Col>
      </Row>
    </Container>
  );
}