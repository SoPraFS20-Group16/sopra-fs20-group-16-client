/**
 * GameDTO model
 */
class GameDTO {
  constructor(data = {}) {
    this.gameId = null;
    this.name = null;
    this.players = [];
    this.withBots = null;
    this.board = null;
    this.moves = [];
    Object.assign(this, data);
  }
}
export default GameDTO;