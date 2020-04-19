import React from "react";
import { Card, Row, Col } from "react-bootstrap";
export default function GameCard(props) {
  return (
    <Card className="my-2">
      <Card.Body>
        <Row>
          <Col>
            <h4>{props.title}</h4>
          </Col>
          <Col className="text-right">Created by: {props.createdBy}</Col>
        </Row>
        <Row>
          <Col>
            <p>Players: {props.players}/4</p>
          </Col>
          <Col className="text-right">
            Bots enabled: {props.bots === 0 ? "NO" : props.bots}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
