import React from "react";
import './style.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default class Rules extends React.Component{
  constructor(props) {
    super();
    this.state={
      open: false,
    }
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render(){
    const { open } = this.state;
    return (
      <div>
        <button
          className={'rulesButton'}
          onClick={this.onOpenModal}>?</button>
        <Modal open={open} onClose={this.onCloseModal} blockScroll={false} >
          
            <RulesContent />

        </Modal>
      </div>
    );
  }

}

