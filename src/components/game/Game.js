import React from "react";
import styled from "styled-components";
import { api, handleError } from "../../helpers/api";
import { withRouter, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import Board from "../board/Board";
import ResourcesList from "./ResourcesList";
import FactBox from "./FactBox";
import GameDTO from "../shared/models/GameDTO";


/*export const GButton = styled(Button)`
  backgroundColor: gold;
  color: black;
  border: black;
`;*/


class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      users: null,
      points:0,
      gameId: null,
      tiles: [],
      possibleMoves: []
    };
    //TODO: find a way to have this gameId to call the server
    this.getGameInfo(this.state.gameId);
  }


  async getGameInfo(id) {
    try {

      // Get the token from the localStorage
      const tokenStr = localStorage.getItem('token');

      // Ask the server to get game info of the game with specific id by passing the token in the header
      const response = await api.get("/games/"+id, {headers:{"token":tokenStr}});

      const game = new GameDTO(response.data);

      const board = new Board(game.board);

      const tiles = board.tiles;

      const possibleMoves = game.moves;

      this.setState({tiles: tiles});

      this.setState({possibleMoves: possibleMoves});


    } catch (error) {
      alert(`Something went wrong while getting the game information\n${handleError(error)}`);
    }
  }




  logout() {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }

  async componentDidMount() {
    try {
      const response = await api.get("/users");

      // Get the returned users and update the state.
      this.setState({ users: response.data });

      // See here to get more data.
      console.log(response);
    } catch (error) {
      alert(
        `Something went wrong while fetching the users: \n${handleError(error)}`
      );
    }
  }

  render() {
    return (
      <html className={"game-bg"}>
        <div style={{
          marginTop:'0px',
          padding:'20px'
        }}>
          <Row>
            <Col >
              <Row>
                <Button style={{
                  backgroundColor: "gold",
                  color: "black",
                  borderColor: "black"}}
                  onClick={() => {
                  this.logout();
                }}
                >
                  Logout
                </Button>
              </Row>

              <Row style = {{textAlign: 'left', backgroundColor: 'white', border: '2px solid black'}}>
                <ResourcesList numLumber = {5} numBrick = {2} numOre = {5} numGrain={3} numWool={10}/>

              </Row>


              <Row style = {{backgroundColor: 'white', border: '2px solid black'}}>
                <h3>Points: {this.state.points}/10</h3>
              </Row>

              <Row>
                <FactBox />
              </Row>




            </Col>

            <Col>
            </Col>
            <Col>
            </Col>


            <Col style={{}}>
              <Board />
            </Col>
          </Row>

          <Row>

          </Row>
        </div>
      </html>
    );
  }
}

export default withRouter(Game);
