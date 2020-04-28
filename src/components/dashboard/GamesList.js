import React from "react";
import GameCard from "./GameCard";
import {api, handleError} from "../../helpers/api";

export default class GamesList extends React.Component {

  constructor() {
    super();
    this.state = {
      games: []
    };
    this.getGames();
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

      // testing
      console.log('response data: ' + JSON.stringify(response.data));

      // Set the games into the state
      this.setState({games: response.data});

      // testing
      console.log('state at getGames(): ' + JSON.stringify(this.state.games));

    } catch (error) {
      alert(`Something went wrong while fetching the existing matches.\n${handleError(error)}`);
    }
  }

  // Use GameCard object to render existing games
  renderGameCards = () => {
    console.log("Games urls: " + this.state.games.map((game) => game.url))
    return this.state.games.map((game, key) => <GameCard key={key} {...game} />);
  };

  // Decide whether to map games if present, or return a message to create a new game
  displayGames() {

    // console.log('games: ' + games[0]);
    if (this.state.games.length !== 0) {
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