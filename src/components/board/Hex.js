import React from 'react';
import {withRouter} from "react-router-dom";

import Hexagon from "react-svg-hexagon";

class Hex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: "absolute",
        right: 0
      },


    }
  }
}

export default withRouter(Hex);