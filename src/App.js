import React, { Component } from "react";
import { HexGrid, Hexagon, Layout, Text, Pattern, Path, Hex } from 'react-hexgrid';

//import Layout from "./components/layout/Layout";
import './App.css';
import Board from "./components/board/Board";
import AppRouter from "./components/shared/routers/AppRouter";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Board />
            </div>
        );
    }
}


export default App;
