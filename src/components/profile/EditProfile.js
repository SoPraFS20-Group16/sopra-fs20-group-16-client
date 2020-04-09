import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { api, handleError } from "../../helpers/api";
// import User from "../shared/models/User";
import { withRouter } from "react-router-dom";
import { Button } from "../../views/design/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

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
  padding-top: 18px;
  padding-bottom: 18px;
  width: 60%;
  height: 400px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 5px;
  background: linear-gradient(rgb(27, 124, 186), rgb(2, 46, 101));
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const StyleHeading = styled.div`
display: flex;
justify-content: center;
color: white;
font-size: 30px;
`;


 const CustomDateInput = ({ value, onClick, onChange }) => (
  <InputField
    placeholder="Enter Date of Birth"
    style={{paddingRight: "10px", width: "100%", height: "28px"}}
    value={value}
    onClick={onClick}
    onChange={onChange}
  />
);
class EditProfile extends React.Component {

  constructor() {
    super();
    this.state = {
        username: null,
        newUsername: null,
        status: null,
        creationDate: null,
        dateOfBirth: null
    };
  }


  async componentDidMount() {
    try {
      if (this.props.location.state.user) {
        const userName = this.props.location.state.user.username;
        const res = await api.get(`/user/?userName=${userName}`);
        this.setState( {username: res.data.username, newUsername: res.data.username,status: res.data.status, creationDate: res.data.creationDate, dateOfBirth: res.data.dateOfBirth});

      } else {
        this.props.history.push("/game");
      }
    } catch (error) {
      alert(
        `Something went wrong while fetching the users: \n${handleError(error)}`
      );
    }
  }


  async edit() {
    try {
      const requestBody = JSON.stringify({
        username: this.state.username,
        newUsername:this.state.newUsername,
        dateOfBirth: this.state.dateOfBirth,
      });
      const res = await api.put("/update", requestBody);
      console.log(requestBody);
      this.setState( {username: res.data.username, newUsername: res.data.username,status: res.data.status, creationDate: res.data.creationDate, dateOfBirth: res.data.dateOfBirth});

      // update successfully worked --> navigate to the route /login in the GameRouter
      this.props.history.push(`/game/dashboard`, {user: this.state});
    } catch (error) {
      alert(
        `Something went wrong when updating information: \n${handleError(error)}`
      );
    }
  }

  handleInputChange(key, value) {
    // Example: if the key is username, this statement is the equivalent to the following one:
    // this.setState({'username': value});
    this.setState({ [key]: value });
  }
  handleDateChange = date => {
     this.setState({
       dateOfBirth: date
     });
   };

  render() {
    return (

      <BaseContainer>
        <StyleHeading>Update Profile</StyleHeading>
        <FormContainer>
          <Form>
            <Label>Username</Label>
            <InputField
              value={this.state.newUsername}
              onChange={e => {
                this.handleInputChange("newUsername", e.target.value);
              }}
            />
            <Label>Status</Label>
            <InputField
              disabled
              value={this.state.status}
              onChange={e => {
                this.handleInputChange("status", e.target.value);
              }}
            />
            <Label>Date of Birth</Label>
            <DatePicker
              customInput={<CustomDateInput />}
          selected={Date.parse(this.state.dateOfBirth)}
          onChange={this.handleDateChange}
        />
            <Label>Date of Creation</Label>
            <InputField type="text" value={moment(this.state.creationDate).format("MMMM Do YYYY")} disabled />
            <ButtonContainer>
              <Button
                width="50%"
                onClick={() => {
                  this.edit();
                }}
              >
                Update
              </Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </BaseContainer>
    );
  }
}


export default withRouter(EditProfile);
