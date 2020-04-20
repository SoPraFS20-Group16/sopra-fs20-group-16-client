import React from 'react';

export default class Hexagon extends React.Component {




    render(){

        return(
            <button className="hexagon">
                {this.props.value}
            </button>

        )
    }


}


