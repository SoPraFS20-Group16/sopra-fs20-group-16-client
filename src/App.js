import React, { Component } from "react";
import { HexGrid, Hexagon, Layout, Text, Pattern, Path, Hex } from 'react-hexgrid';

//import Layout from "./components/layout/Layout";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
                    {/* Grid with manually inserted hexagons */}
                    <Layout size={{ x: 5, y: 5 }} flat={false} spacing={1.1} origin={{ x: -10, y: -20 }}>
                        <Hexagon q={0} r={0} s={0} />
                        <Hexagon q={1} r={0} s={0} />
                        <Hexagon q={2} r={0} s={0} />

                        <Hexagon q={-1} r={1} s={0} />
                        <Hexagon q={0} r={1} s={0} />
                        <Hexagon q={1} r={1} s={0} />
                        <Hexagon q={2} r={1} s={0} />


                        <Hexagon q={-2} r={2} s={0} />
                        <Hexagon q={-1} r={2} s={0} />
                        <Hexagon q={0} r={2} s={0} />
                        <Hexagon q={1} r={2} s={0} />
                        <Hexagon q={2} r={2} s={0} />

                        <Hexagon q={-2} r={3} s={0} />
                        <Hexagon q={-1} r={3} s={0} />
                        <Hexagon q={0} r={3} s={0} />
                        <Hexagon q={1} r={3} s={0} />

                        <Hexagon q={-2} r={4} s={0} />
                        <Hexagon q={-1} r={4} s={0} />
                        <Hexagon q={0} r={4} s={0} />



                    </Layout>

                </HexGrid>
            </div>
        );
    }
}


export default App;
