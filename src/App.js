import React, { Component } from "react";
import './App.css';
import AppRouter from "./components/shared/routers/AppRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}


export default App;
