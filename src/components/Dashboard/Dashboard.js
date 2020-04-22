import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import AvatarCircle from "../AvatarCircle/AvatarCircle";
import avatarUrl from "../../views/graphics/avatar.jpg";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import GamesList from "./GamesList";

const defaultFormState = {
  title: "",
  players: "",
  bots: "",
  boardSize: "",
  otherOptions: "",
  createdBy: "Generic User"
};

export default class Dashboard extends Component {
  state = {
    ...defaultFormState,

    games: []
  };

  renderGameCards = () => {
    return this.state.games.map((game, i) => <GameCard key={i} {...game} />);
  };

  handleStartGame = () => {};
  handlePlayersChange = e => {
    const { value } = e.target;
    this.setState({
      players: parseInt(value)
    });
  };
  handleBotsChange = e => {
    const { value } = e.target;
    this.setState({
      bots: parseInt(value)
    });
  };
  handleBoardSizeChange = e => {
    const { value } = e.target;
    this.setState({
      boardSize: parseInt(value)
    });
  };
  handleOtherOptionsChange = e => {
    const { value } = e.target;
    this.setState({
      otherOptions: value
    });
  };

  handleStartGame = () => {
    const title = "Game " + this.state.games.length + 1;
    const { players, bots, boardSize, otherOptions } = this.state;
    const createdBy = "Generic User";

    const newGame = {
      title,
      players,
      bots,
      boardSize,
      createdBy,
      otherOptions
    };
    this.setState({
      ...defaultFormState,
      games: this.state.games.concat(newGame)
    });
  };
  render() {
    return (
      <>
        <div style={{ margin: "40px" }}>
          <Link to="/profile">
            <AvatarCircle avatarUrl={avatarUrl} size={100} className="my-3" />
          </Link>
        </div>

        <Form
          onSubmit={e => {
            e.preventDefault();
            this.handleStartGame();
          }}
        >
          <Row>
            <Col md={{ span: 5, offset: 1 }} style={{ padding: "35px" }}>
              <Form.Group>
                <Form.Label
                  style={{
                    fontSize: "20px",
                    fontWeight: "600"
                  }}
                >
                  Number of Players
                </Form.Label>
                <Form.Control
                  style={{ cursor: "pointer" }}
                  as="select"
                  value={this.state.players}
                  onChange={this.handlePlayersChange}
                  required
                >
                  <option disabled value="">
                    Choose Option
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    fontSize: "20px",
                    fontWeight: "600"
                  }}
                >
                  Number of Bots
                </Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.bots}
                  onChange={this.handleBotsChange}
                  required
                  style={{ cursor: "pointer" }}
                >
                  <option disabled value="">
                    Choose Option
                  </option>
                  <option>0</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    fontSize: "20px",
                    fontWeight: "600"
                  }}
                >
                  Board Size
                </Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.boardSize}
                  onChange={this.handleBoardSizeChange}
                  style={{ cursor: "pointer" }}
                  required
                >
                  <option disabled value="">
                    Choose Option
                  </option>
                  <option>0</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    fontSize: "20px",
                    fontWeight: "600"
                  }}
                >
                  Other Options
                </Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.otherOptions}
                  onChange={this.handleOtherOptionsChange}
                  style={{ cursor: "pointer" }}
                  required
                >
                  <option disabled value="">
                    Choose Option
                  </option>
                  <option>0</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Button type="submit" className="mx-auto d-block">
                Start Game
              </Button>
            </Col>
            <Col md={6}>
              <GamesList/>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}
