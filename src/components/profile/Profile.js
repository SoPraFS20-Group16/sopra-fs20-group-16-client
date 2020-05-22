import React, {Component} from "react";
import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class Profile extends Component {
  state = {
    username: "",
    email: "",
    password: "",

    editingField: false
  };
  handleUsernameChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };
  handleEmailChange = e => {
    const { value } = e.target;
    this.setState({ email: value });
  };
  handlePasswordChange = e => {
    const { value } = e.target;
    this.setState({ password: value });
  };

  handleEditClick = editingField => {
    this.setState({ editingField });
  };

  handleSaveClick = () => {
    this.setState({ editingField: false });
  };

  handleBackClick = () => {
    console.log("TODO: implement this feature");
  };

  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          this.handleSaveClick();
        }}
      >
        <Row className="my-3">
          {/*<Col>*/}
          {/*  <AvatarCircle avatarUrl={avatarUrl} className="mx-auto" />*/}
          {/*</Col>*/}
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                value={this.state.username}
                onChange={this.handleUsernameChange}
                readOnly={this.state.editingField !== "username"}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="username"
              />
              <InputGroup.Append>
                <InputGroup.Text id="username">
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => this.handleEditClick("username")}
                  />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={this.state.email}
                onChange={this.handleEmailChange}
                readOnly={this.state.editingField !== "email"}
                type="email"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="email"
              />
              <InputGroup.Append>
                <InputGroup.Text id="email">
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => this.handleEditClick("email")}
                  />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={this.state.password}
                onChange={this.handlePasswordChange}
                readOnly={this.state.editingField !== "password"}
                type="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="password"
              />
              <InputGroup.Append>
                <InputGroup.Text id="password">
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => this.handleEditClick("password")}
                  />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            {this.state.editingField && <Button type="submit">Save</Button>}
            <Link to="/dashboard">
              <Button>Back</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    );
  }
}
