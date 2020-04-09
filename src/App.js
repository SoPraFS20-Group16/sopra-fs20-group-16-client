import React, { Component } from "react";
import Header from "./views/Header";
import AppRouter from "./components/shared/routers/AppRouter";
import Background from "./full_frame_background.jpg"
import {ReactLogo} from "./views/ReactLogo";




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
      </div>
    );
  }
}

export default App;
