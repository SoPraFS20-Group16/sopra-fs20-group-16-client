import React from "react";
import {Link, withRouter} from "react-router-dom";
import { api } from "../../helpers/api";
import './style.css';
import styled from "styled-components";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import pin from './pin.png';



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

const TOKEN =
    "pk.eyJ1Ijoia2FyaW1hYm91ZWxuYWdhMiIsImEiOiJjazl5MHkwMGEwZ3UzM2dsaXpmc21kMW54In0.IUzrOcWiWDGBpcVKsFCX-g";

const latlong = [
    { name: "Tokyo", latitude: 35.652832, longitude: 139.839478 }
];

const Markers = ({usersLatLong}) => {
    // const {data} = this.props;
    console.log('aasdsa', usersLatLong);
    return usersLatLong.map(city => {
        return city.latitude && city.longitude ?
            <Marker
                key={city.countryName ? city.countryName: ''}
                offsetLeft={-19}
                offsetTop={-37}
                longitude={city.longitude ? city.longitude : 0}
                latitude={city.latitude ? city.latitude: 21}
            >
                <img src={pin} height="42" width="42" alt=""/>
            </Marker>: <div/>

    });
};



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            gameDetails: {},
            usersLatLong: [],
            viewport: {
                width: "100%",
                height: 450,
                latitude: 20,
                longitude: 0,
                zoom: 1
            }
        };
        this.startGamehandler = this.startGamehandler.bind(this);
        this._onViewportChange = this._onViewportChange.bind(this);
        this.interval = null;
    }

    _onViewportChange = viewport =>
        this.setState({
            viewport: {
                ...viewport,
                transitionDuration: 0
            }
        });

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
        api.get('/users').then((res) => {
            console.log(res, "response logging");
            this.setState({usersLatLong: res.data.map(({location})=> ({
      ...location
                }))})
        });
        this.interval = setInterval(() => {
            api.get("/games/"+ this.props.match.params.id ).then((res) => {
                this.setState({ gameDetails: {...res.data}});
                if(res.data && res.data.started) {
                    this.props.history.push("/game/"+this.props.match.params.id+"/dashboard");
                }
            }).catch(e =>{
                this.props.history.push("/dashboard");
            })
        }, 1000);
        console.log(this.props, "show me")

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
        console.log(this.state.usersLatLong, "users state");
    return <div className="body1">
        <div className="header">
            <div className={"header_logout"}>
                <GoldButt onClick={() => this.logout()}>Logout</GoldButt>
            </div>
            <h1 className={"header_title"}> Welcome to the Settlers of Toucan!</h1>

        </div>

        <div className="mapContainer">
            <MapGL
                {...this.state.viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/karimabouelnaga2/ck9y14ojn1yfd1iphribr8z9e"
                onViewportChange={this._onViewportChange}
            >
                <Markers usersLatLong = {this.state.usersLatLong}/>
            </MapGL>
        </div>

                <div className="containerPlayerInfos">
                    {this.state.gameDetails.players && this.state.gameDetails.players.map((player, index) => <p key={index}>{player.username}</p>)}
                </div>

                {this.state.gameDetails.moves && this.state.gameDetails.moves.length > 0 && <div className="start_button">
                    <GreenButt onClick={this.startGamehandler}>Start the Game</GreenButt>
                </div>}
    </div>
  }
}

export default withRouter(Home);
