import React from "react";
import {Link, withRouter} from "react-router-dom";
import { api } from "../../helpers/api";
import './style.css';
import styled from "styled-components";

const GoldButt = styled.button`
    padding: 17px;
    background-color: gold;
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
`;


const GreenButt = styled.button`
    padding: 17px;
    background-color: RGB(26, 229, 26);
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
`;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            gameDetails: {}
        };
        this.startGamehandler = this.startGamehandler.bind(this);
        this.interval = null;
    }

    async logout() {
        await api.put("/logout", null, {
            headers: {
                "Token": localStorage.getItem("token")
            }
        });
        localStorage.removeItem("token");
        this.props.history.push("/login");
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            api.get("/games/"+ this.props.match.params.id ).then((res) => {
                this.setState({ gameDetails: {...res.data}});
                if(res.data && res.data.started) {
                    this.props.history.push("/game/"+this.props.match.params.id+"/dashboard");
                }
            })
        }, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    async startGamehandler () {

        const requestBody = {
            moveId: this.state.gameDetails.moves[0].moveId
        };
        await api.put("/games/" + this.props.match.params.id, requestBody).then(
            this.props.history.push("/game/"+ this.props.match.params.id+"/dashboard")
        )

}

    render() {
    return <div className="body1">
        <div className="header">
            <div className={"header_logout"}>
                <GoldButt onClick={() => this.logout()}>Logout</GoldButt>
            </div>
            <h1 className={"header_title"}> Welcome to the Settlers of Toucan!</h1>

        </div>

        <div className="center">

        <div className="right">
            <div className="down">

                <div className="containerGameInfos">
                    {this.state.gameDetails.players && this.state.gameDetails.players.map((player, index) => <p key={index}>{player.username}</p>)}
                </div>

                {this.state.gameDetails.moves && this.state.gameDetails.moves.length > 0 && <div className={"start_button"}>
                    <GreenButt onClick={this.startGamehandler}>Start the Game</GreenButt>
                </div>}



            </div>
        </div>

    </div>
    </div>
  }
}

export default withRouter(Home);
