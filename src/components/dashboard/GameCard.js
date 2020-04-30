import React from "react";
import { api } from "../../helpers/api";
import { Card, Row, Col } from "react-bootstrap";
export default function GameCard({game,history}) {

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
        onClick={async () => {
          const token = localStorage.getItem("token")
          await api.post(`/games/${game.gameId}/players`, null, {
            headers: { token }
          })
          history.push(`/games/${game.gameId}`); // TODO: fix routing to lobby
        }}>
        <Row>
          <Col>
            <h4>{game&&game.name}</h4>
          </Col>
          {/*<Col className="text-right">Created by: {props.createdBy}</Col>*/}
        </Row>
        <Row>
          <Col>
            <p>Players: {game&&game.joinedPlayers.toString()}/4</p>
            <p style={{
              fontStyle: 'italic'
            }}>min.{game&&game.minPlayers.toString()} to start</p>
          </Col>
          <Col className="text-right" style={{maxWidth:"130px"}}>
            Bots: {game&&game.withBots ? "enabled" : "disabled"}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
