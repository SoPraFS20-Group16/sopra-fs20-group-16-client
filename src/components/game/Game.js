import React from "react";
import './style.css'
import { api, handleError } from "../../helpers/api";
import { withRouter } from "react-router-dom";
import Board from "../board/Board";
import ResourcesList from "./ResourcesList";
// import FactBox from "./FactBox";
import Feed from "./Feed";
import ActionBox from "./ActionBox";


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      users: null,
      points:0,
      gameId: null,
      tiles: [],
      roads:[],
      settlements:[],
      cities:[],
      moves: [],
      players: [],

      currPlResources: null,
      currPlDevCards: null,
    };
    this.getGameInfo = this.getGameInfo.bind(this);

  }
  componentDidMount() {
    let interval = setInterval(() => {
      this.getGameInfo(this.props.match.params.id);
    }, 2000);

    //this.getGameInfo(this.props.match.params.id);
  }


  async getGameInfo(id) {
    try {

      // Ask the server to get game info of the game with specific id by passing the token in the header
      const response = await api.get("/games/"+id);

      console.log("Game data from server: \n" + JSON.stringify(response.data, null, 2))

      // find out current player's score
      let points = 0;
      response.data.players.map((player) =>
        response.data.name === player.username ? points = player.points : null)

      // Assign data to state
      this.setState({
        tiles: response.data.board.tiles,
        roads: response.data.board.roads,
        gameId: response.data.gameId,
        settlements: response.data.board.settlements,
        cities: response.data.board.cities,
        moves: response.data.moves,
        players: response.data.players,
        points: points,
      });


      // Set current player resources and development cards to state
      let i = 0;
      while(response.data.players[i].resources === null && i < 4){i++}

      this.setState({
        currPlResources:response.data.players[i].resources,
        currPlDevCards:response.data.players[i].developmentCards,
      })

    } catch (error) {
      alert(`Something went wrong while getting the game information\n${handleError(error)}`);
    }
  }


  async logout() {
    await api.put("/logout", null, {
      headers: {
        "Token": localStorage.getItem("token")
      }
    })
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
              gameId = {this.state.gameId}
              tiles={this.state.tiles}
              moves={this.state.moves}
              roads={this.state.roads}
              settlements={this.state.settlements}
              cities={this.state.cities}
              players={this.state.players}
            />

            <div className={'chatBox'}>
              <h4>Chat</h4>
              <h4 style={{position:"relative", left:'3px'}}> ° ° ° ° </h4>
              <p>TheLegend27: Yo wassup</p>
              <p>TheLegend27: gl hf</p>
            </div>
          </div>

          <div>
            {this.state.moves && this.state.moves.length !== 0 ?
              <ActionBox
                moves = {this.state.moves}
                gameId = {this.state.gameId}
              />
              : <ActionBox moves = "emptyMoves"/>}
          </div>


        </div>
      </div>
    );
  }
}

export default withRouter(Game);
