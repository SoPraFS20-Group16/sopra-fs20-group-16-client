import React from 'react';
import {withRouter} from "react-router-dom";

class Hexagon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coords: Array(6),
            tileType: null,
            number: null,
        }
    }




    render(){
        return(
            <div>
                {this.state.coords}
            </div>
            )

    }


}


export default withRouter(Hexagon);

