/**
 * Game model
 */
class GameStruct {
  constructor(data = {}) {
    this.gameID = null;
    this.url = null;
    Object.assign(this, data);
  }
}
export default GameStruct;