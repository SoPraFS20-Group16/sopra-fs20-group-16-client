import React from 'react';
import { withRouter } from 'react-router-dom';

export default function Hexagon(props) {
    return(
        <button className="hexagon">
            {props.value}
        </button>

    )

}


