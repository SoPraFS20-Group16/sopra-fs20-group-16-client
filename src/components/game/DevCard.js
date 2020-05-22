import { api } from "../../helpers/api";
import React from "react";



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

  async buyDevCard(e) {

    const requestBody = JSON.stringify({
      moveId: this.props.moveId,
    });

    await api.put("/games/" + this.props.gameId, requestBody);
    this.props.onClose();
  }





  render() {
    return(
      <div>
          <button
            className='offerButton'
            style={{marginLeft: '100px'}}
            onClick={(e) => {this.buyDevCard(e)}}
          >
            {this.devType()}
          </button>

      </div>
    )
  }
}