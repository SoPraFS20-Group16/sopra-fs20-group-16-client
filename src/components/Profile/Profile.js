import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../views/design/Button";
import { api, handleError } from "../../helpers/api";
// import moment from 'moment';

const FormContainer = styled.div`
  border: 2px solid white;
  border-radius: 50px
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center

`;
const TextStyle = styled.div`
  padding: 20px
  color: white;
`;
const InfoStyle = styled.label`
  color: #dcdcdc;
  margin-left: 7px;
`;

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: "",
        status: "",
        creationDate: "",
        dateOfBirth: null
      }
    };
  }
  async componentDidMount() {
    try {
      if (this.props.match.params.username) {
        const userName = this.props.match.params.username;
        const res = await api.get(`/user/?userName=${userName}`);
        this.setState({ user: res.data });
        console.log(res);
      } else {
        this.props.history.push("/game");
      }
    } catch (error) {
      alert(
        `Something went wrong while fetching the users: \n${handleError(error)}`
      );
    }
  }
  render() {
    const { username, status, creationDate, dateOfBirth } = this.state.user;
    return (
      <div>
        {console.log(this.props.location.state.user)}
        <Button
          style={{
            padding: "0 30px 0 30px",
            marginLeft: "10%"
          }}
        >
          <Link
            to={{
              pathname: "/game/dashboard",
              state: { user: this.props.location.state.user }
            }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            &#8592; Go Back
          </Link>
        </Button>

        <FormContainer>
          <h1
            style={{
              borderBottom: "2px solid white",
              // color: "white",
              padding: "10px",
              fontWeight: "bold",
              color: "#06c4ff"
            }}
          >
            User Profile
          </h1>
          <TextStyle>
            Username: <InfoStyle>{username}</InfoStyle>
          </TextStyle>
          <TextStyle>
            Status: <InfoStyle>{status}</InfoStyle>
          </TextStyle>
          <TextStyle>
            {/* Date Of Birth: <InfoStyle>{dateOfBirth ? moment(dateOfBirth).format("MMMM Do YYYY") : "Not available"}</InfoStyle> */}
          </TextStyle>
          <TextStyle>
            {/* Created On: <InfoStyle>{moment(creationDate).format("MMMM Do YYYY")}</InfoStyle> */}
          </TextStyle>
        </FormContainer>
      </div>
    );
  }
}

export default withRouter(Profile);
