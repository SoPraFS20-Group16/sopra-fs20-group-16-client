import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
export default function GameCard(props) {
  return (
    <Card className="my-2" style={{
      maxWidth:"500px",
      backgroundColor:"gold",
      borderColor:"black",
      cursor:"pointer"
    }}>
      <Card.Body
        style={{
          paddingRight: "30px",
        }}
        onClick={() => {
          this.props.history.push(props.url.toString()); // TODO: fix routing to lobby
        }}>
        <Row>
          <Col>
            <h4>{props.name}</h4>
          </Col>
          {/*<Col className="text-right">Created by: {props.createdBy}</Col>*/}
        </Row>
        <Row>
          <Col>
            Players: {props.joinedPlayers.toString()}/4
            <p>min.{props.minPlayers.toString()} to start</p>
          </Col>
          <Col className="text-right" style={{maxWidth:"130px"}}>
            Bots: {props.withBots ? "enabled" : "disabled"}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
