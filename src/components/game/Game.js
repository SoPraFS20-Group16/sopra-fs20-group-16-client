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
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      users: null,
      points:0,
      gameId: null,
      tiles: [],
      possibleMoves: [],
      players: [],
    };
    this.getGameInfo = this.getGameInfo.bind(this);

  }
  componentDidMount() {
    this.getGameInfo(this.props.match.params.id);
  }


  async getGameInfo(id) {
    try {

      // Get the token from the localStorage
      const tokenStr = localStorage.getItem('token');

      // Ask the server to get game info of the game with specific id by passing the token in the header
      const response = await api.get("/games/"+id);

      const game = new GameDTO(response.data);

      const board = new Board(game.board);

      const tiles = board.tiles;

      const possibleMoves = game.moves;

      const players = game.players;

      this.setState({gameId: id});

      this.setState({tiles: tiles});

      this.setState({possibleMoves: possibleMoves});

      this.setState({players: players});

      console.log(this.state.gameId);


    } catch (error) {
      // alert(`Something went wrong while getting the game information\n${handleError(error)}`);
    }
  }


  logout() {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }


  render() {
    return (
      <html className={"game-bg"}>
        <div style={{
          marginTop:'0px',
          padding:'20px'
        }}>
          <Row>
            <Button style={{
              backgroundColor: "gold",
              color: "black",
              borderColor: "black",
              margin: "20px"
            }}
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </Button>
          </Row>

          <Container>
            <Row>
              <Col style={{
                background: "url('/views/graphics/background_messagelog.png')",
                border: '1px solid black'
              }}>


                <Row>
                  <div>

                    <h4>Player XY, your turn!</h4>

                  </div>
                </Row>

                <Row>
                  <ResourcesList
                    numLumber = {5}
                    numBrick = {2}
                    numOre = {5}
                    numGrain={3}
                    numWool={10}
                    numKnight={1}
                    numMonopoly={0}
                    numVictory={1}/>

                </Row>


                <Row style = {{backgroundColor: 'white', border: '2px solid black'}}>
                  <h3>Points: {this.state.points}/10</h3>
                </Row>


                <Row>
                  <div style ={{border: '2px solid black', backgroundColor: 'white', borderRadius:10, width: '100%', height: '100%'}}>
                    <h3>Randome Quote</h3>
                    <h4>Programming is hard</h4>
                    <h5>- SOPRA client team </h5>
                  </div>

                </Row>

              </Col>

              <Col>
                <div style={{
                  paddingLeft:'50px'
                }}>
                  <Board />
                </div>

              </Col>
            </Row>
          </Container>
        </div>
      </html>
    );
  }
}

export default withRouter(Game);
