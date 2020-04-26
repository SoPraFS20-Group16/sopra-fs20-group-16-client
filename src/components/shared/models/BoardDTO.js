/**
 * BoardDTO model
 */
class BoardDTO {
  constructor(data = {}) {
    this.tiles = [];

    Object.assign(this, data);
  }
}
export default BoardDTO;