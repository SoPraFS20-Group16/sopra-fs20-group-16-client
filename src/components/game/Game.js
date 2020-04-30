import React from "react";
import './style.css'
import { api, handleError } from "../../helpers/api";
import { withRouter, Link } from "react-router-dom";
import Board from "../board/Board";
import ResourcesList from "./ResourcesList";
// import FactBox from "./FactBox";
import GameDTO from "../shared/models/GameDTO";
import Feed from "./Feed";


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
      console.log(JSON.stringify(response));
    } catch (error) {
      alert(
        `Something went wrong while fetching the users: \n${handleError(error)}`
      );
    }
  }

  render() {
    return (
      <div className={"game-bg"}>
        <button className={'button1'}
          onClick={() => {
            this.logout();
          }}
        >
          Logout
        </button>

        <div className={'container1'}>
          <div className={'containerGameInfos'}>

            <div className={'innerBox'}>
              <ResourcesList
                numLumber = {5}
                numBrick = {2}
                numOre = {5}
                numGrain={3}
                numWool={9}
                numKnight={1}
                numMonopoly={0}
                numVictory={1}/>
            </div>


            <div className={'innerBox'}>
              <h4>Points: {this.state.points}/10</h4>
            </div>


            <div className={'feedBox'}>
              <h4>
                Feed
              </h4>
              <h4>° ° ° °</h4>
              <Feed />
            </div>

          </div>

          <div className={'containerBoard'}>
            <Board />

            <div className={'chatBox'}>
              <h4>Chat</h4>
              <p>TheLegend27: Yo wassup</p>
              <p>TheLegend27: gl hf</p>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default withRouter(Game);
