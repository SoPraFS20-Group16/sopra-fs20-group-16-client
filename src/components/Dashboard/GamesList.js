import React, { Component } from "react";
import GameCard from "./GameCard";
import {api, handleError} from "../../helpers/api";
import GameStruct from "../shared/models/GameStruct";

export default class GamesList extends React.Component {

  constructor() {
    super();
    this.state = {
      games: null
    };
  }

  /**
   * HTTP GET request is sent for /games to the backend by passing the user's token.
   * If the request is successful, the existing games are saved in the state.
   */
  async getGames() {
    try {

      // Get the token from the localStorage
      const tokenStr = localStorage.getItem('token');

      // Ask the server the games by passing the token in the header
      const response = await api.get("/games", {headers:{Token:tokenStr}});

/*      // Convert response
      const responseObj = JSON.parse(response.data);*/

      // Set the games into the state

      this.state.games = response.data;
      console.log('games returned: ' + this.state.games);

    } catch (error) {
      alert(`Something went wrong while fetching the existing matches.\n${handleError(error)}`);
    }
  }

  // Decide whether to map games if present, or return a message
  displayGames() {

    this.getGames()

    if (this.state.games !== null) {
      //return this.state.games.map((game, i) => <GameCard key={i} {...game} />);
      return console.log(this.state.games);
    }

    else {
      return 'No matches open yet! Create one on the left to begin.'
    }
}

  render() {
    return (
      <div>
        {this.displayGames()}
      </div>
    );
  }

}