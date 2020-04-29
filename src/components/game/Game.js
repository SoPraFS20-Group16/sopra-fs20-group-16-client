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
      board: [],
      possibleMoves: [],
      players: [],
    };

    this.getGameInfo(localStorage.getItem("gameID"));
  }


  async getGameInfo(id) {
    try {

      // Get the token from the localStorage
      const tokenStr = localStorage.getItem('token');

      // Ask the server to get game info of the game with specific id by passing the token in the header
      const response = await api.get("/games/"+id, {headers:{"token":tokenStr}});

      const game = new GameDTO(response.data);

      const board = new Board(game.board);


      const possibleMoves = game.moves;

      const players = game.players;

      this.setState({gameId: id});


      this.setState({possibleMoves: possibleMoves});

      this.setState({players: players});

      this.setState({board: board.props.tiles});

      localStorage.setItem("board", this.state.board);

      console.log(this.state.gameId);
      console.log("players" + JSON.stringify(game.players));

      console.log("possible moves -> " + JSON.stringify(game.moves));
      console.log("board -->" + JSON.stringify(board.props.tiles));
      console.log("board State -->" + JSON.stringify(this.state.board))


    } catch (error) {
      // alert(`Something went wrong while getting the game information\n${handleError(error)}`);
    }
  }

  /*
  async makeMove(){

    const tokenStr = localStorage.getItem("token");

    await api.put("/games/"+this.state.gameId, move, {headers:{"Token":tokenStr}});

  }

   */

  highlightPossibleMoves(){

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
      console.log(JSON.stringify(response));
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
            <Col xs lg="2">
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

              <Row>
                <div style ={{backgroundColor: 'white', border: '2px solid black', borderRadius: 10, height: '100%', width: '100%'}}>

                  <h4>Player XY, your turn!</h4>

                </div>

              </Row>

              <Row style = {{textAlign: 'left', backgroundColor: 'white', border: '2px solid black'}}>
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
                  <h3>Random Quote</h3>
                  <h4>Programming is hard</h4>
                  <h5>- SOPRA client team </h5>
                </div>

              </Row>

            </Col>


            <Col md = {6} style={{height: '100%', width:'100%'}}>
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
