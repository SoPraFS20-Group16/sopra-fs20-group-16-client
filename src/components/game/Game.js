import React from "react";
import './style.css'
import { api, handleError } from "../../helpers/api";
import { withRouter } from "react-router-dom";
import Board from "../board/Board";
import ResourcesList from "./ResourcesList";
import BuildingCosts from "./BuildingCosts";
import ActionBox from "./ActionBox";
import Dice from "./Dice";
import PlayersList from "./PlayersList";
import Modal from 'react-modal';




let opponentHasLeft = false;

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
      lastDice: 0,
      playerColors: {},
      currPlResources: null,
      currPlDevCards: null,
      isModalOpen: false
    };
    this.getGameInfo = this.getGameInfo.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }
  closeModal () {
    this.setState({isModalOpen: false})
  }



  componentDidMount()
    {
      let interval = setInterval(() => {
        console.log(opponentHasLeft, "opponent?")
        if (opponentHasLeft) {
          clearInterval(interval)
          this.props.history.push('/dashboard');
          opponentHasLeft = false;
        } else{
          this.getGameInfo(this.props.match.params.id);
        }
      }, 3000);
  }


  async getGameInfo(id) {
    try {
      // Ask the server to get game info of the game with specific id by passing the token in the header
      const response = await api.get("/games/"+id);
      console.log("Game data from server: \n", response.data)
      const players = response.data.players;
      let points = 0;
      players.map((player) =>
      player.points !== 0 ? points = player.points : "");



      // Assign data to state
      this.setState({
        tiles: response.data.board ?  response.data.board.tiles : [],
        roads: response.data.board ? response.data.board.roads : this.state.roads,
        gameId: response.data.gameId,
        settlements:  response.data.board ?  response.data.board.settlements :this.state.settlements ,
        cities: response.data.board ? response.data.board.cities: this.state.cities,
        moves: response.data.moves,
        players: response.data.players,
        points: points,
        playerColors: this.assignColors(response.data.players),
        lastDice: response.data.lastDiceRoll,
      });

      if ( response.data.board === undefined) {
        this.setState({isModalOpen: true});
      }


      // Set current player resources and development cards to state
      let i = 0;
      while(response.data.players[i].resources === null && i < 4){i++}

      this.setState({
        currPlResources:response.data.players[i].resources,
        currPlDevCards:response.data.players[i].developmentCards,
      });

    } catch (error) {
      console.log('errrorr', this.state.players)
      opponentHasLeft = true;
      this.setState({isModalOpen: true})
      // alert(`Something went wrong while getting the game information\n${handleError(error)}`);
    }
  }


  async logout() {
    await api.put("/logout", null, {
      headers: {
        "Token": localStorage.getItem("token")
      }
    });
    localStorage.removeItem("gameID");
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }

  // Assign colors to players
  assignColors(players) {
    const colors = ["cyan", "red", "lightgreen", "yellow"];
    let playerColors = {};

    players.map((pl, key) => {
      playerColors[pl.userId] = colors[key];
    });

    return playerColors;
  }



  render() {
    console.log("state", this.state)
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
                {this.state.currPlResources && this.state.currPlDevCards &&
                <ResourcesList
                  resources = {this.state.currPlResources}
                  devCards = {this.state.currPlDevCards}
                />}
              </div>


            <div className={'innerBox'}>
              <h4>Points: {this.state.points}/10</h4>
            </div>


            <BuildingCosts />


          </div>

          <div className={'containerBoard'}>
            {this.state.tiles.length !== 0 && <Board
              gameId = {this.state.gameId}
              tiles={this.state.tiles}
              moves={this.state.moves}
              roads={this.state.roads}
              settlements={this.state.settlements}
              cities={this.state.cities}
              players={this.state.players}
              playerColors={this.state.playerColors}
            />}


          </div>

          <div className={'skinnyBox'}>
            {this.state.moves && this.state.moves.length !== 0 ?
              <ActionBox
                moves = {this.state.moves}
                gameId = {this.state.gameId}
              />
              : <ActionBox moves = "emptyMoves"/> }

            {this.state.playerColors !== {} && this.state.players.length !== 0 && <PlayersList
              colors={this.state.playerColors}
              players={this.state.players}
            />}

            {this.state.lastDice > 0 && <Dice result={this.state.lastDice}/>}

          </div>
        </div>
        <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={() => this.closeModal()}
            className={'scoreboard'}
            contentLabel="Example Modal"

        >
          {this.state.players.map(p => (
              <div>
                <p><b> <span>Player: {p.username} </span>  Points:{p.points} </b></p>
              </div>
          ))}

          <button className={'dashboardButton'}
                  onClick={() => {
                    this.props.history.push('/dashboard');
                  }}
          >
            <b>Lobby</b>
          </button>

        </Modal>
      </div>
    );
  }
}

export default withRouter(Game);
