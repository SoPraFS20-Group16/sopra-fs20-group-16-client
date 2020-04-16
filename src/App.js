import React, { Component } from "react";
import Header from "./views/Header";
import AppRouter from "./components/shared/routers/AppRouter";
import {ReactLogo} from "./views/ReactLogo";
import Game from "./components/game/Game";




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
      </div>

    );
  }
}

export default App;
