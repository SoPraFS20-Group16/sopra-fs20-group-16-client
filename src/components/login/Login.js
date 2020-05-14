import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { api, handleError } from "../../helpers/api";
import { withRouter } from "react-router-dom";
import { Button } from "../../views/design/Button";
import Token from "../shared/models/Token";

const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 450px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  text-align:center;
  border-radius: 5px;
  background-image: url("full_frame_background.jpg")
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 20px;
  background: gold;
  color: black;
`;

const Label = styled.label`
  color: black;
  margin-bottom: 10px;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button2 = styled.button`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 6px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: black;
  width: 200px;
  height: 35px;
  border-radius: 20px;
  transition: all 0.3s ease;
  background: transparent;
`;

/**
 * Classes in React allow you to have an internal state within the class and to have the React life-cycle for your component.
 * You should have a class (instead of a functional component) when:
 * - You need an internal state that cannot be achieved via props from other parent components
 * - You fetch data from the server (e.g., in componentDidMount())
 * - You want to access the DOM via Refs
 * https://reactjs.org/docs/react-component.html
 * @Class
 */
class Login extends React.Component {
  /**
   * If you don’t initialize the state and you don’t bind methods, you don’t need to implement a constructor for your React component.
   * The constructor for a React component is called before it is mounted (rendered).
   * In this case the initial state is defined in the constructor. The state is a JS object containing two fields: name and username
   * These fields are then handled in the onChange() methods in the resp. InputFields
   */
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }
  /**
   * HTTP POST request is sent to the backend.
   * If the request is successful, a new user is returned to the front-end
   * and its token is stored in the localStorage.
   */
  async login() {
    try {
      const requestBody = JSON.stringify({
        username: this.state.username,
        password: this.state.password
      });

      const response = await api.put("/login", requestBody);

      const token = new Token(response.data);
      await api.put("/login", requestBody);

      // Store the token into the local storage.
      localStorage.setItem("token", token.token);

      // Login successfully worked --> navigate to the route /game in the GameRouter
      this.props.history.push(`/dashboard`);
    } catch (error) {
      alert(`Something went wrong during the login: \n${handleError(error)}`);
    }
  }

  /**
   *  Every time the user enters something in the input field, the state gets updated.
   * @param key (the key of the state for identifying the field that needs to be updated)
   * @param value (the value that gets assigned to the identified state key)
   */
  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }

  /**
   * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
   * Initialization that requires DOM nodes should go here.
   * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
   * You may call setState() immediately in componentDidMount().
   * It will trigger an extra rendering, but it will happen before the browser updates the screen.
   */
  componentDidMount() {}

  render() {
    return (
      <BaseContainer>
        <FormContainer>
          <Form>
            <Label>
              <b>Username</b>
            </Label>
            <InputField
              placeholder="Enter here.."
              onChange={e => {
                this.handleInputChange("username", e.target.value);
              }}
            />
            <Label>
              <b>Password</b>
            </Label>
            <InputField
              type="password"
              placeholder="Enter here.."
              onChange={e => {
                this.handleInputChange("password", e.target.value);
              }}
            />
            <ButtonContainer>
              <Button
                disabled={!this.state.username || !this.state.password}
                width="50%"
                onClick={() => {
                  this.login();
                }}
              >
                Login
              </Button>
            </ButtonContainer>

            <Label>
              {" "}
              <p> </p>
              <p> No account?</p>
            </Label>

            <ButtonContainer>
              <Button2
                width="20%"
                onClick={() => {
                  this.props.history.push(`/register`);
                }}
              >
                Register here!
              </Button2>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </BaseContainer>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Login);
