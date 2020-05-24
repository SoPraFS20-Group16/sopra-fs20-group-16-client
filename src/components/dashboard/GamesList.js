import React from "react";
import GameCard from "./GameCard";
import {api, handleError} from "../../helpers/api";
import {withRouter} from "react-router-dom";

class GamesList extends React.Component {

  constructor(props) {
    super(props);
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
      setInterval(async () => {
        const response = await api.get("/games");
        this.setState({games: response && response.data});
      }, 1500)


    } catch (error) {
      alert(`Something went wrong while fetching the existing matches.\n${handleError(error)}`);
    }
  }

  // Use GameCard object to render existing games
  renderGameCards = () => {
    console.log("Games urls: " + this.state.games.map((game) => game.url));
    return this.state.games.map((game, key) =>
        game.started ? "" :
            <GameCard key={key} history={this.props.history} game={game}/>);
  };

  // Decide whether to map games if present, or return a message to create a new game
  displayGames() {

    if (this.state.games.filter((game) =>
        !game.started).length !== 0) {
      return this.renderGameCards();
    } else {
      return 'No matches open yet! Create one on the left to begin.'
    }
  }

  render() {
    return (
      <div>
        {this.displayGames(this.props)}
      </div>
    );
  }

}

export default withRouter(GamesList)