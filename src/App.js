import React, { Component } from "react";

//import Layout from "./components/layout/Layout";
import './App.css';
import Board from "./components/board/Board";
import AppRouter from "./components/shared/routers/AppRouter";

class App extends Component {
    render() {
        return (
            <div className="App">
            <AppRouter/>
            </div>
        );
    }
}


export default App;
