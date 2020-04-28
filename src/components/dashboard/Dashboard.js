import React, {Component} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import AvatarCircle from "../avatarCircle/AvatarCircle";
import avatarUrl from "../../views/graphics/avatar.jpg";
import {Link} from "react-router-dom";
import GamesList from "./GamesList";
import {api, handleError} from "../../helpers/api";
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

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      withBots: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleBotsChange(event) {
    const target = event.target;
    const value = target.name === 'withBots' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log("State change: " + this.state.name)
  }

  handleInputChange(key, value){
    this.setState({[key]: value});
    console.log("State change: " + this.state.key)
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
      const tokenStr = localStorage.getItem('token');

      console.log('State before sending game: ' + this.state.name + ', ' + this.state.withBots)

      // Get the game for the request's body
      const requestBody = JSON.stringify({
        name: this.state.name,
        withBots: this.state.withBots.toString()
      });
      console.log('JSON: ' + requestBody)


      // Send the newly created game to the server
      let res = await api.post("/games", requestBody,{headers:{"Token":tokenStr}});
      console.log("Response: " + res);
      console.log("Response headers: " + JSON.stringify(res.headers));

      const headers = res.headers;

      if (res.status === 201) {
        console.log('201 status from game creation');
      } else {
        console.log('Non-201 status from game creation');
      }

      return res;

    } catch (error) {
      alert(`Something went wrong while sending the crated game to the server.\n${handleError(error)}`);
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
              onSubmit={e => {
                e.preventDefault();
                this.sendCreatedGame().then(response => {
                  const gameURL = "/game" + response.headers.location
                  console.log("Composed game URL: " + gameURL);
                  this.props.history.push(gameURL);
                });
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
                    <p>Create a New Game</p>
                  </Form.Label>
                  <Row>
                    <InputField
                        type="text"
                        placeholder="Enter match name..."
                        required
                        onChange={e =>{
                          this.handleInputChange('name', e.target.value);
                        }}
                    />
                  </Row>

                  <Row style={{padding:"5px"}}>
                    <input
                        name={'withBots'}
                        style={{position:"relative",bottom:"6px", paddingRight:"20px"}}
                        //label={"Enable bots"}
                        type='checkbox'
                        checked={this.state.withBots}
                        onChange={e =>{
                          this.handleInputChange('withBots', e.target.checked);}}
                    />
                    <p style={{paddingLeft:"10px"}}>Enable bots</p>
                  </Row>


                </Form.Group>

                <Row>
                    <Button
                        onClick={this.sendCreatedGame}
                        type="submit" className="mx-auto d-block"
                        style={{
                          backgroundColor:"gold",
                          color:"black",
                          borderColor:"black",
                          position:"absolute",
                          left:"75px",
                        }}>
                      Start Game
                    </Button>
                </Row>

              </Col>

              <Col md={6} style={{paddingRight: "40px"}}>
                <Form.Label
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}>
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
