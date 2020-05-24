import React from "react";
import {api} from "../../helpers/api";
import {Card, Col, Row} from "react-bootstrap";

export default function GameCard({game, history}) {

  return (
      <Card className="my-2" style={{
        maxWidth: "500px",
        backgroundColor: "gold",
        borderColor: "black",
        cursor: "pointer"
      }}>
      <Card.Body
        style={{
          paddingRight: "30px",
        }}
        onClick={async () => {
          await api.post(`/games/${game.gameId}/players`);
          history.push(`/games/${game.gameId}`);
        }}>
        <Row>
          <Col>
            <h4>{game&&game.name}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Players: {game&&game.joinedPlayers.toString()}/4</p>
            <p style={{
              fontStyle: 'italic'
            }}>Click to join</p>
          </Col>
          <Col className="text-right" style={{maxWidth:"130px"}}>
            Bots: {game&&game.withBots ? "enabled" : "disabled"}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}