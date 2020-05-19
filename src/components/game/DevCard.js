import { api } from "../../helpers/api";
import React from "react";
import {Modal} from 'react-responsive-modal';
import PlentyMove from "./PlentyMove";


export default class DevCard extends React.Component{
  constructor(props) {
    super(props);

  }



  devType(){
    if(this.props.devType === "KNIGHT"){
      return <t>Knight Card</t>
    }

    if(this.props.devType === "MONOPOLYPROGRESS"){
      return <t>Monopoly Card</t>
    }

    if(this.props.devType === "PLENTYPROGRESS"){
      return <t>Plenty Progress</t>
    }


    if(this.props.devType === "ROADPROGRESS"){
      return <t>Road Progress</t>
    }
  }





  render() {
    return(
      <div>
          <button
            className='offerButton'
            style={{marginLeft: '100px'}}
            onClick={async () => await api.put("/games/" + this.props.gameId, JSON.stringify({moveId: this.props.moveId}))}
          >
            {this.devType()}
          </button>

      </div>
    )
  }
}