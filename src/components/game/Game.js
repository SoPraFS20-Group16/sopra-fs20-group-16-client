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
  constructor() {
    super();
    this.state = {
      currentUser: {},
      users: null,
      points:0,
      gameId: null,
      tiles: [],
      possibleMoves: [],
      players: [],

      currPlResources: null,
      currPlDevCards: null,
    };
    //TODO: find a way to have this gameId to call the server
    this.getGameInfo(localStorage.getItem("gameID"));
  }


  async getGameInfo(id) {
    try {

      // Get the token from the localStorage
      const tokenStr = localStorage.getItem('token');

      // Ask the server to get game info of the game with specific id by passing the token in the header
      const response = await api.get("/games/"+id, {headers:{"token":tokenStr}});

      console.log("Complete response from server in game:\n" + JSON.stringify(response.data));

      const game = new GameDTO(response.data);

      const board = new Board(game.board);

      const tiles = board.tiles;

      const possibleMoves = game.moves;

      const players = game.players;

      this.setState({gameId: id});

      this.setState({tiles: tiles});

      this.setState({possibleMoves: possibleMoves});

      this.setState({players: players});

      // Set current player resources and development cards to state
      let i = 0;
      while(game.players[i].resources === null && i < 4){i++}

      console.log("player resources: " + JSON.stringify(game.players[i].resources));
      this.setState({currPlResources:game.players[i].resources})

      console.log("player dev cards: " + JSON.stringify(game.players[i].developmentCards));
      this.setState({currPlDevCards:game.players[i].developmentCards})

      console.log("gameID: " + this.state.gameId);


    } catch (error) {
      alert(`Something went wrong while getting the game information\n${handleError(error)}`);
    }
  }

  async getPlayerResources() {
    let i = 0;
    while(this.state.players[i] === undefined && i < 4){i++;}
    console.log("player resources: " + JSON.stringify(this.state.players[i]));
    // return this.state.players[i].resources;
  }

  getPlayerDevCards() {
    let i = 0;
    // while(this.state.players[i].developmentCards === null){i++;}

    // return this.state.players[i].developmentCards;
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
      // console.log(JSON.stringify(response));
    } catch (error) {
      alert(
        `Something went wrong while fetching the users: \n${handleError(error)}`
      );
    }
  }

  render() {
    return (
      <html className={"game-bg"}>
        <div>
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
                {console.log("player resources in state at render: " + this.state.currPlResources)}
                <ResourcesList
                  resources = {this.state.currPlResources}
                  devCards = {this.state.currPlDevCards}
                  />
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
      </html>
    );
  }
}

export default withRouter(Game);
