import React from "react";
import {Link, withRouter} from "react-router-dom";
import './style.css';

class Home extends React.Component {

    logout() {
        localStorage.removeItem("token");
        this.props.history.push("/login");
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
                    <p>players 3/4</p>
                </div>
                <div className="box4">
                    <p>Let's start this game </p>
                    <img onClick={()=>{this.props.history.push("/game")}} src={require('./send.svg')} height={'20px'} width="20px"/>
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
