import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import AvatarCircle from "../avatarCircle/AvatarCircle";
import avatarUrl from "../../views/graphics/avatar.jpg";
import { Link, withRouter } from "react-router-dom";
import GamesList from "./GamesList";
import { api, handleError } from "../../helpers/api";
import styled from "styled-components";

const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 20px;
  background: gold;
  color: black;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      withBots: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleBotsChange(event) {
    const target = event.target;
    const value = target.name === "withBots" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log("State change: " + this.state.name);
  }

  handleInputChange(key, value) {
    this.setState({ [key]: value });
    console.log("State change: " + this.state.key);
  }

  /*  handleStartGame = () => {
      // const title = "Game " + this.state.games.length + 1;
      const {title, bots} = this.state;
      // const createdBy = "Generic User";

      const newGame = {
        title,
        bots
      };
      this.setState({
        ...defaultFormState,
        // games: this.state.games.concat(newGame) (moved to GamesList)
      });
    };*/

  /**
   * HTTP POST request is sent to /games in the backend by passing the new game and
   * the user's token. If the request is successful, the game was saved by the server.
   */
  async sendCreatedGame() {
    try {
      // Get the token from the localStorage
      const tokenStr = localStorage.getItem("token");

      console.log(
        "State before sending game: " +
          this.state.name +
          ", " +
          this.state.withBots
      );

      // Get the game for the request's body
      const requestBody = JSON.stringify({
        name: this.state.name,
        withBots: this.state.withBots.toString(),
      });
      console.log("JSON: " + requestBody);

      // Send the newly created game to the server
      let res = await api.post("/games", requestBody, {
        headers: { Token: tokenStr },
      });
      console.log(res);
      if (res.status === 201) {
        window.location.reload();
        console.log("201 status from game creation");
      } else {
        console.log("Non-201 status from game creation");
      }
      return res.data;
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        alert(
          `Something went wrong while sending the crated game to the server because you are in some other game`
        );
      }
    }
  }

  async getGames() {
    try {
      // Get the token from the localStorage
      const tokenStr = localStorage.getItem("token");

      // Ask the server the games by passing the token in the header
      const response = await api.get("/games", {
        headers: { token: tokenStr },
      });

      // testing
      console.log("response data: " + response.data[0]);
      console.log('response data url: ' + response.data[0].url);

      // Set the games into the state
      this.setState({ games: response && response.data });

      // testing
      console.log('state at getGames(): ' + this.state.games[0]);
      console.log('state at getGames(): ' + this.state.games[0].url);
    } catch (error) {
      this.getGames();
      alert(
        `Something went wrong while fetching the existing matches.\n${handleError(
          error
        )}`
      );
    }
  }

  render() {
    return (
      <>
        <div style={{ margin: "40px" }}>
          <Link to="/profile">
            <AvatarCircle avatarUrl={avatarUrl} size={100} className="my-3" />
          </Link>
        </div>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.sendCreatedGame().then((data) => {
              this.getGames();

            });
          }}
        >
          <Row>
            <Col md={{ span: 5, offset: 1 }} style={{ padding: "35px" }}>
              <Form.Group>
                <Form.Label
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  <p>Create a New Game</p>
                </Form.Label>
                <Row>
                  <InputField
                    type="text"
                    placeholder="Enter match name..."
                    required
                    onChange={(e) => {
                      this.handleInputChange("name", e.target.value);
                    }}
                  />
                </Row>

                <Row style={{ padding: "5px" }}>
                  <input
                    name={"withBots"}
                    style={{
                      position: "relative",
                      bottom: "6px",
                      paddingRight: "20px",
                    }}
                    //label={"Enable bots"}
                    type="checkbox"
                    checked={this.state.withBots}
                    onChange={(e) => {
                      this.handleInputChange("withBots", e.target.checked);
                    }}
                  />
                  <p style={{ paddingLeft: "10px" }}>Enable bots</p>
                </Row>
              </Form.Group>

              <Row>
                <Button
                  onClick={this.sendCreatedGame}
                  type="submit"
                  className="mx-auto d-block"
                  style={{
                    backgroundColor: "gold",
                    color: "black",
                    border: "black",
                    position: "absolute",
                    left: "75px",
                  }}
                >
                  Start Game
                </Button>
              </Row>
            </Col>

            <Col md={6} style={{ paddingRight: "40px" }}>
              <Form.Label
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <p>Join an Existing Match</p>
              </Form.Label>
              <GamesList />
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}
export default withRouter(Dashboard);
