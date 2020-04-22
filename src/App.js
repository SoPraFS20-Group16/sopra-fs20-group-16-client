import React, { Component } from "react";
import Header from "./views/Header";
import AppRouter from "./components/shared/routers/AppRouter";
import {ReactLogo} from "./views/ReactLogo";
import Game from "./components/game/Game";
import { Row } from 'react-bootstrap';
import Hexagon from "./components/board/Hexagon";




/**
 * Happy coding!
 * React Template by Lucas Pelloni
 */
class App extends Component {
  render() {
    return (
      <div>
          <Header height={"100"} />
          <AppRouter />
          <Game />
          <Hexagon />
      </div>

    );
  }
}

export default App;
