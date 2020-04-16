import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";

import AvatarCircle from "../AvatarCircle/AvatarCircle";
import avatarUrl from "../../assets/images/avatar.jpg";
import GameCard from "../GameCard/GameCard";

const defaultFormState = {
  title: "",
  players: "",
  bots: "",
  boardSize: "",
  otherOptions: "",
  createdBy: "Generic User",
};

export default class Dashboard extends Component {
  state = {
    ...defaultFormState,

    games: [],
  };

  renderGameCards = () => {
    return this.state.games.map((game, i) => <GameCard key={i} {...game} />);
  };

  handleStartGame = () => {};
  handlePlayersChange = (e) => {
    const { value } = e.target;
    this.setState({
      players: parseInt(value),
    });
  };
  handleBotsChange = (e) => {
    const { value } = e.target;
    this.setState({
      bots: parseInt(value),
    });
  };
  handleBoardSizeChange = (e) => {
    const { value } = e.target;
    this.setState({
      boardSize: parseInt(value),
    });
  };
  handleOtherOptionsChange = (e) => {
    const { value } = e.target;
    this.setState({
      otherOptions: value,
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
      otherOptions,
    };
    this.setState({
      ...defaultFormState,
      games: this.state.games.concat(newGame),
    });
  };
  render() {
    return (
      <>
        <AvatarCircle avatarUrl={avatarUrl} size={100} className="my-3" />

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleStartGame();
          }}
        >
          <Row>
            <Col md={{ span: 5, offset: 1 }}>
              <Form.Group>
                <Form.Label>Number of Players</Form.Label>
                <Form.Control
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
                <Form.Label>Number of Bots</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.bots}
                  onChange={this.handleBotsChange}
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
                <Form.Label>Board Size</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.boardSize}
                  onChange={this.handleBoardSizeChange}
                  required
                >
                  <option disabled value="">
                    Choose Option
                  </option>
                  <option>21</option>
                  <option>27</option>
                  <option>33</option>
                  <option>39</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Other Options</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.otherOptions}
                  onChange={this.handleOtherOptionsChange}
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
            <Col md={6}>{this.renderGameCards()}</Col>
          </Row>
        </Form>
      </>
    );
  }
}
