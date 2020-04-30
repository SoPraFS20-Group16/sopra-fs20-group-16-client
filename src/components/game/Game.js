import React from "react";
import './style.css'
import { api, handleError } from "../../helpers/api";
import { withRouter, Link } from "react-router-dom";
import Board from "../board/Board";
import ResourcesList from "./ResourcesList";
import FactBox from "./FactBox";
import GameDTO from "../shared/models/GameDTO";
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

      this.setState({board: board});


      console.log(this.state.gameId);
      console.log("players" + JSON.stringify(game.players));

      console.log("possible moves -> " + JSON.stringify(game.moves));
      //console.log("board -->" + JSON.stringify(board.props.tiles));
      //console.log("board State -->" + JSON.stringify(this.state.board))


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


              <div className={'innerBox'}>
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
