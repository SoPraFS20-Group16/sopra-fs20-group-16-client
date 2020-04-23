import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
export default function GameCard(props) {
  return (
    <Card className="my-2">
      <Card.Body
        onClick={() => {
          this.props.history.push(`${props.url}`);
        }}>
        <Row>
          <Col>
            <h4>Game: {props.name}</h4>
          </Col>
          {/*<Col className="text-right">Created by: {props.createdBy}</Col>*/}
        </Row>
        <Row>
          <Col>
            <p>Players: {props.joinedPlayers}/{props.maxPlayers}</p>
          </Col>
          <Col className="text-right">
            Bots enabled: {props.bots}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
