import React from "react";
import './style.css'
import { api, handleError } from "../../helpers/api";
import { withRouter, Link } from "react-router-dom";
import Board from "../board/Board";
import ResourcesList from "./ResourcesList";
// import FactBox from "./FactBox";
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
      moves: [],
      players: [],
      cities: [],
      settlements: [],
      roads: [],

      currPlResources: null,
      currPlDevCards: null,
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

      console.log("Game data from server: \n" + JSON.stringify(response.data))

      this.setState({
        tiles: response.data.board.tiles,
        roads: response.data.board.roads,
        gameId: response.data.gameId,
        settlements: response.data.board.settlements,
        cities: response.data.board.cities,
        moves: response.data.moves,
        players: response.data.players,
      });


      // Set current player resources and development cards to state
      let i = 0;
      while(response.data.players[i].resources === null && i < 4){i++}

      this.setState({
        currPlResources:response.data.players[i].resources,
        currPlDevCards:response.data.players[i].developmentCards,
      })
      console.log("currPlResources: " + JSON.stringify(this.state.currPlResources));
      console.log("currPlDevCards: " + JSON.stringify(this.state.currPlDevCards));


    } catch (error) {
      alert(`Something went wrong while getting the game information\n${handleError(error)}`);
    }
  }


  logout() {
    localStorage.removeItem("token");
    this.props.history.push("/login");
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
              {console.log("player resources in state at render: " + this.state.currPlResources)}
              {this.state.currPlResources && this.state.currPlResources &&
              <ResourcesList
                resources = {this.state.currPlResources}
                devCards = {this.state.currPlDevCards}
              />}
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
            <Board
              tiles={this.state.tiles}
              moves={this.state.moves}
              settlements={this.state.settlements}
              players = {this.state.players}
            />

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
