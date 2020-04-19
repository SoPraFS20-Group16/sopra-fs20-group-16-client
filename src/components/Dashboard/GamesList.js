import React, { Component } from "react";
import GameCard from "./GameCard";
import {api, handleError} from "../../helpers/api";

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
      // Get token from localStorage
      const token = localStorage.getItem('token')

      // Ask the server the games by passing the token and return if successful
      this.state.games = await api.get("/games", token);


    } catch (error) {
      alert(`Something went wrong while fetching the existing matches.\n${handleError(error)}`);
    }
  }

  // Decide whether to map games if present, or return a message
  displayGames() {

    this.getGames(); //TODO check why the server returns an error

    if (this.state.games !== null) {
      return this.state.games.map((game, i) => <GameCard key={i} {...game} />);
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