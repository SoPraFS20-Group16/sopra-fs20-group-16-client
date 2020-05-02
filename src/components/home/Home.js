import React from "react";
import {Link, withRouter} from "react-router-dom";
import { api } from "../../helpers/api";
import './style.css';

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
        })
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
        }
        await api.put("/games/" + this.props.match.params.id, requestBody).then(
            this.props.history.push("/game/"+ this.props.match.params.id+"/dashboard")
        )

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
                    {this.state.gameDetails.players && this.state.gameDetails.players.map((player, index) => <p key={index}>{player.username}</p>)}
                </div>
                {this.state.gameDetails.moves && this.state.gameDetails.moves.length > 0 && <div className="box4">
                    <p>Let's start this game </p>
                    <img onClick={this.startGamehandler} src={require('./send.svg')} height={'20px'} width="20px"/>
                </div>}
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
