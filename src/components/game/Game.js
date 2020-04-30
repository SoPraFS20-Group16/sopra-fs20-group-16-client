import React from "react";
import './style.css'
import { api, handleError } from "../../helpers/api";
import { withRouter, Link } from "react-router-dom";
import Board from "../board/Board";
import ResourcesList from "./ResourcesList";
// import FactBox from "./FactBox";
import Feed from "./Feed";


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
      moves: [],
      players: [],

      currPlResources: null,
      currPlDevCards: null,
    };
  }

  componentDidMount() {
    this.getGameInfo(localStorage.getItem('gameID'));
  }


  async getGameInfo(id) {
    try {

      // Get the token from the localStorage
      const tokenStr = localStorage.getItem('token');

      // Ask the server to get game info of the game with specific id by passing the token in the header
      const response = await api.get("/games/"+id, {headers:{"token":tokenStr}});

      this.setState({
        tiles: response.data.board.tiles,
        roads: response.data.board.roads,
        gameId: response.data.gameId,
        settlements: response.data.board.settlements,
        cities: response.data.board.cities,
        moves: response.data.moves,
        players: response.data.players,
      });

      console.log("gameID -->" + JSON.stringify(this.state.gameId));
      console.log("tiles -->" + JSON.stringify(this.state.tiles));
      console.log("roads -->" + JSON.stringify(this.state.roads));
      console.log("settlements -->" + JSON.stringify(this.state.settlements));
      console.log("cities -->" + JSON.stringify(this.state.cities));
      console.log("moves -->" + JSON.stringify(this.state.moves));

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

  /*
  async makeMove(){

    const tokenStr = localStorage.getItem("token");

    await api.put("/games/"+this.state.gameId, move, {headers:{"Token":tokenStr}});

  }

   */

  logout() {
    localStorage.removeItem("token");
    this.props.history.push("/login");
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
              <Board tiles={this.state.tiles}/>

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
