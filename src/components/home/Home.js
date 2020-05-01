import React from "react";
import {Link, withRouter} from "react-router-dom";
import { api } from "../../helpers/api";
import './style.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.startGamehandler = this.startGamehandler.bind(this);
        this.interval = null;
    }

    logout() {
        localStorage.removeItem("token");
        this.props.history.push("/login");
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            api.get("/games/"+ this.props.match.params.id ).then((res) => {
                this.setState(res.data);
                if(res.data && res.data.started) {
                    this.props.history.push("/game/"+this.props.match.params.id+"/dashboard");
                }
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startGamehandler () {
        api.post(`/games/${this.props.match.params.id}/start`, true ).then((res) => {
            this.props.history.push("/game/"+this.props.match.params.id+"/dashboard")
        })
    }

    render() {

        return <div className="body1"><div className="center">
            <div className="left">
                <h1 className="heading">
                    <b>Players around the world</b>
                </h1>
            </div>
            <div className="right">
                <div className="up">
                    <div className="box1">

                        <h1><b>~Chat~</b></h1>
                        <p>
                            <b>>> user_2</b> asdf joined the game

                        </p>
                        <p>
                            <b>>> user_1</b> hello there :)
                        </p>
                    </div>
                    <div className="box2">
                        <p>Hi there...!</p>
                        <img src={require('./send.svg')} height={'20px'} width="20px"/>
                    </div>
                </div>
                <div className="down">
                    <div className="box3">
                        {this.state && this.state.players && this.state.players.map((player, index) => <p key={index}>{player.username}</p>)}
                    </div>
                    <div className="box4">
                        <p>Let's start this game </p>
                        <img onClick={this.startGamehandler} src={require('./send.svg')} height={'20px'} width="20px"/>
                    </div>
                    <div className="buttons">
                        <p className="button1">
                            <a href="#" onClick={() => this.logout()}>Logout</a></p>
                        <p className="button2">

                        </p>
                        <p className="button3">

                        </p>
                    </div>
                </div>
            </div>

        </div>
        </div>
    }
}

export default withRouter(Home);
