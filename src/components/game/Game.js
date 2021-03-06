import React from "react";
import './style.css'
import {api} from "../../helpers/api";
import {withRouter} from "react-router-dom";
import Board from "../board/Board";
import ResourcesList from "./ResourceList";
import BuildingCosts from "./BuildingCosts";
import ActionBox from "./ActionBox";
import Dice from "./Dice";
import PlayersList from "./PlayersList";
import Modal from 'react-modal';
import Rules from "./Rules";
import Feed from "./Feed";
import PlentyMove from "./PlentyMove";
import MonopolyMove from "./MonopolyMove";


let opponentHasLeft = false;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      history: null,
      currentPlayer: null,
      currPlResources: null,
      currPlDevCards: null,
      isModalOpenScoreboard: false,
      isModalOpenWarning: false,
      scoreBoardPlayers: []
    };
    this.getGameInfo = this.getGameInfo.bind(this);
    this.closeModalWarning = this.closeModalWarning.bind(this);
    this.closeModalScoreboard = this.closeModalScoreboard.bind(this);
  }
  closeModalWarning () {
    this.setState({isModalOpenWarning: false})
  }

  closeModalScoreboard () {
    this.setState({isModalOpenScoreboard: false})
  }

  componentDidMount()
    {
      document.body.classList.add("backgroundGame");
      let interval = setInterval(() => {
        if (opponentHasLeft) {
          clearInterval(interval);
          opponentHasLeft = false;
        } else{
          this.getGameInfo(this.props.match.params.id);
        }
      }, 1500);
  }

  componentWillUnmount() {
    document.body.classList.remove("backgroundGame");
  }

  async getGameInfo(id) {

    try {
      // Ask the server to get game info of the game with specific id by passing the token in the header
      const response = await api.get("/games/"+id);
      console.log("Game data from server: \n", response.data);
      const players = response.data.players;
      let points = 0;
      players.map((player) =>
      player.points !== 0 ? points = player.points : "");

      // check if game is over
      if (response.data.dtoType === "GameSummaryDTO") {
        this.setState({
          scoreBoardPlayers: response.data.players,
          isModalOpenScoreboard: true,
        });
        return;
      }

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
        currentPlayer: response.data.currentPlayer,
        history: response.data.history.moves
      });

      // Set current player resources and development cards to state
      let i = 0;
      while(response.data.players[i].resources === null && i < 4){i++}

      this.setState({
        currPlResources:response.data.players[i].resources,
        currPlDevCards:response.data.players[i].developmentCards,
      });

    } catch (error) {
      console.log('error', this.state.players);
      opponentHasLeft = true;
      this.setState({isModalOpenScoreboard: true})
      // alert(`Something went wrong while getting the game information\n${handleError(error)}`);
    }
  }

  includePlenty(){
    let i = 0;
    let arr = [];
    while (i < this.state.moves.length) {
      if (arr.includes(this.state.moves[i].moveName) === false)
        arr.push(this.state.moves[i].moveName);
      i++;
    }
    return arr.includes("PlentyMove")
  }

  includeMonopoly(){
    let i = 0;
    let arr = [];
    while (i < this.state.moves.length) {
      if (arr.includes(this.state.moves[i].moveName) === false)
        arr.push(this.state.moves[i].moveName);
      i++;
    }
    return arr.includes("MonopolyMove")
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
    return (
      <div className={"game-bg"}>
        <div style={{display:'flex'}}>
          <button className={'button1'}
                  onClick={() => {
                    this.setState({isModalOpenWarning: true})
                  }}
          >
            Logout
          </button>

          <Rules/>

        </div>


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
              <div className={'boxTitle'}>
                Points: {this.state.points}/10
              </div>
            </div>


            <BuildingCosts />


          </div>

          <div className={'boardContainer'}>
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

            {this.state.history && <Feed history={this.state.history} colors={this.state.playerColors}/>}

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
              currentPlayer={this.state.currentPlayer}
            />}

            {this.state.lastDice > 0 && <Dice result={this.state.lastDice}/>}

            {this.state.moves && this.state.moves.length !== 0 && this.includePlenty() ?
              <PlentyMove moves={this.state.moves} gameId ={this.state.gameId}/> :""
            }

            {this.state.moves && this.state.moves.length !== 0 && this.includeMonopoly()?
              <MonopolyMove moves={this.state.moves} gameId ={this.state.gameId}/> :""
            }

          </div>
        </div>

        <Modal
          isOpen={this.state.isModalOpenScoreboard}
          onRequestClose={() => this.closeModalScoreboard()}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
          style={{
            content : {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'beige',
              width: '300px',
              height: 'fit-content',
              textAlign: 'center',
              border: '1px solid black',
              borderRadius: '10px'
            },
            overlay: {zIndex: 10}}}
        >

          <div style={{padding: '10px'}}>
            <p><b>This Game is over, good luck</b></p>
            <p> <b>on your next adventure!</b></p>
          </div>

          {this.state.scoreBoardPlayers.map(p => (
            <div style={{display: 'flex', padding: '15px', justifyContent:'space-between'}}>
              <div>Player: <b>{p.username}</b></div>
              <div><b>{p.points}</b> Points</div>
            </div>
          ))}

          <button className={'dashboardButtonLogout'}
              onClick={() => {
                this.props.history.push('/dashboard');
              }}
          >
            <b>Lobby</b>
          </button>

        </Modal>

        <Modal
          isOpen={this.state.isModalOpenWarning}
          onRequestClose={() => this.closeModalWarning()}
          contentLabel="Example Modal"
          style={{
            content : {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'beige',
              width: '300px',
              height: '150px',
              textAlign: 'center',
              border: '1px solid black',
              borderRadius: '10px'
            },
            overlay: {zIndex: 10}}}
      >
          <p><b>When you leave, the session </b> </p>
          <p><b>is over for everyone.</b> </p>
        <div style={{display: "flex", justifyContent: 'space-around'}}>
          <button className={'dashboardButtonLogout'}
                  onClick={() => {
                    this.logout().then(r => this.props.history.push('/startPage'))
                  }}
          >
            <b>Logout</b>
          </button>

          <button className={'dashboardButtonLogout'}
                  onClick={() => {
                    this.setState({isModalOpenWarning: false})
                  }}
          >
            <b>Back</b>
          </button>
        </div>
      </Modal>

      </div>
    );
  }
}

export default withRouter(Game);
