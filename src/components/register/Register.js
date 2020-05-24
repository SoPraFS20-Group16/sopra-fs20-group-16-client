import React from 'react';
import styled from 'styled-components';
import {BaseContainer} from '../../helpers/layout';
import {api, handleError} from '../../helpers/api';
import {withRouter} from 'react-router-dom';
import {Button} from '../../views/design/Button';
import Token from "../shared/models/Token";


const FormContainer = styled.div`
  margin-top: 7em;
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
  height: 300px;
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

const InputFieldCheck = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  padding-left: 20px;
  margin-left: 350px;
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 20px;
  background: gold;
  color: black;
`;

const Label = styled.label`
  color: black;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
 
  margin-bottom: 20px;
`;

class Register extends React.Component{
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            tracking: false
        };
    }

    async isNotEmptyOrSpaces(str){
        return str == null || str.match(/^ *$/) !== null;

    }

    async register(){
        try{
            const requestBody = JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                tracking: this.state.tracking
            });


            if(this.isNotEmptyOrSpaces(requestBody)){
                const response = await api.post("/users", requestBody);
                const token = new Token(response.data);

                // Store the token into the local storage.
                localStorage.setItem("token", token.token);

                // Login successfully worked --> navigate to the route /game in the GameRouter
                this.props.history.push(`/dashboard`);
            }


        } catch (error) {
            alert(`Something went wrong during the registration!\n${handleError(error)}`);

        }
    }



    handleInputChange(key, value){
        this.setState({[key]: value});
    }

    componentDidMount() {}

    render() {
        return (
          <BaseContainer>
              <FormContainer>
                  <Form>
                      <Label><b>Username</b></Label>
                      <InputField
                        placeholder="Enter here..."
                        maxLength={10}
                        onChange={e =>{
                            this.handleInputChange('username', e.target.value);
                        }}
                      />
                      <Label><b>Password</b></Label>
                      <InputField type="password"
                                  placeholder="Enter here..."
                                  onChange={e =>{
                                      this.handleInputChange('password', e.target.value);
                                  }}
                      />

                      <label><b>Show your location on a shared map</b></label>
                      <InputFieldCheck type="checkbox"

                             onChange={() => {
                                 this.handleInputChange('tracking', true)
                             }}

                      />

                      <ButtonContainer>
                          <Button
                            disabled = {!this.state.username || !this.state.password}
                            width="50%"
                            onClick={() => {
                                this.register();
                            }}
                          >
                              Register!

                          </Button>
                      </ButtonContainer>
                      <label>
                          {" "}
                          <a href={'/login'} style={{ color: 'black' }}> Already signed up?</a>
                      </label>
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
export default withRouter(Register);

