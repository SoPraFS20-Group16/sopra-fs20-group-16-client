import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import User from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';


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
  height: 300px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  text-align:center;
  border-radius: 5px;
  background: linear-gradient(#108048, #08341E);
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: lightgreen;
  color: black;
`;

const Label = styled.label`
  color: white;
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
            password: null
        };
    }

    async register(){
        try{
            const requestBody = JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })


            this.props.history.push('/login');
            await api.post('/users', requestBody);

        } catch (error) {
            alert("Something went wrong during the registration!")

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
                        <Label>Username</Label>
                        <InputField
                            placeholder="Enter here..."
                            onChange={e =>{
                                this.handleInputChange('username', e.target.value);
                            }}
                        />
                        <Label>Password</Label>
                        <InputField type="password"
                            placeholder="Enter here..."
                            onChange={e =>{
                                this.handleInputChange('password', e.target.value);
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

