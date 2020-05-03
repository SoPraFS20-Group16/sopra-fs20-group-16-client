import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`;

const CatanTitle = styled.div`
/* The Settlers of Toucan */

position: center;
width: 700px;
height: 265px;
left: 53px;
top: 308px;

font-family: inherit;
font-style: serif;
font-weight: 1000;
font-size: 100px;
font-border: 2px black;
line-height: 100px;
/* or 67% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2px;

color: gold;

mix-blend-mode: normal;
text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
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
class StartPage extends React.Component {
  /**
   * If you don’t initialize the state and you don’t bind methods, you don’t need to implement a constructor for your React component.
   * The constructor for a React component is called before it is mounted (rendered).
   * In this case the initial state is defined in the constructor. The state is a JS object containing two fields: name and username
   * These fields are then handled in the onChange() methods in the resp. InputFields
   */
  constructor(props) {
    super(props);
    this.state = {
    };
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
          <CatanTitle>
            The Settlers Of Toucan
          </CatanTitle>
        </FormContainer>
        <ButtonContainer>
          <Button
            width='30%'
            onClick={() => {
              this.props.history.push(`/login`);
            }}>
            Sign In
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            width='30%'
            onClick={() => {
              this.props.history.push(`/register`);
            }}>
            Register
          </Button>
        </ButtonContainer>
      </BaseContainer>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(StartPage);