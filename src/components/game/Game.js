import React from "react";
import styled from "styled-components";
import { api, handleError } from "../../helpers/api";
import { withRouter, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  InputGroup,
  Button, FormLabel
} from "react-bootstrap";
import Board from "../board/Board";


/*export const GButton = styled(Button)`
  backgroundColor: gold;
  color: black;
  border: black;
`;*/


class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      users: null
    };
  }

  logout() {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }

  async componentDidMount() {
    try {
      const response = await api.get("/users");

      // Get the returned users and update the state.
      this.setState({ users: response.data });

      // See here to get more data.
      console.log(response);
    } catch (error) {
      alert(
        `Something went wrong while fetching the users: \n${handleError(error)}`
      );
    }
  }

  render() {
    return (
      <html className={"game-bg"}>
        <div style={{
          marginTop:'0px',
          padding:'20px'
        }}>
          <Row>
            <Col>

              <Button style={{
                backgroundColor: "gold",
                color: "black",
                border: "black"
              }}>
                Logout
              </Button>

            </Col>

            <Col>
              <Board />
            </Col>
          </Row>

          <Row>

          </Row>
        </div>
      </html>
    );
  }
}

export default withRouter(Game);
