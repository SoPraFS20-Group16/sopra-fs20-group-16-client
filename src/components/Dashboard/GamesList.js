import React, { Component } from "react";
import GameCard from "./GameCard";
import {api, handleError} from "../../helpers/api";

export default class GamesList extends React.Component {

  constructor() {
    super();
    this.state = {
      games: []
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
      const response = await api.get("/games", {headers:{"token":tokenStr}});

      // Data printing for testing
      // console.log('response data: ' + response.data[0].gameId);
      // console.log('response data: ' + response.data[0].url);

      // Set the games into the state
      this.state.games = response.data;
      console.log('state: ' + this.state.games[0].gameId);
      console.log('state: ' + this.state.games[0].url);

    } catch (error) {
      alert(`Something went wrong while fetching the existing matches.\n${handleError(error)}`);
    }
  }

  // Use GameCard object to render existing games
  renderGameCards = () => {
    return this.state.games.map((game, i) => <GameCard key={i} {...game} />);
  };

  // Decide whether to map games if present, or return a message
  displayGames() {

    this.getGames()

    if (this.state.games !== []) {
      return this.renderGameCards();
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