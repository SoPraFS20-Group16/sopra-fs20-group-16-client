import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Player from '../../views/Player';
import { Spinner } from '../../views/design/Spinner';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';

import Board from "../board/Board";


class Game extends React.Component {



  async componentDidMount() {
  }

  render() {


    return (
        <div>
            <Board />
        </div>
    );
  }
}

export default withRouter(Game);