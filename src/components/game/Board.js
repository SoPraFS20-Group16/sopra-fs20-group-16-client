import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Player from '../../views/Player';
import { Spinner } from '../../views/design/Spinner';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';



class Board extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div>
        Board
      </div>
    );
  }
}

export default withRouter(Board);
