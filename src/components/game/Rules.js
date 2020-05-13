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
          <h2>Rules</h2>
          <h3>In order to win:</h3>
          bla bla bla bla bla {'\n'}
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ertz ertz edfrgthz

        </Modal>
      </div>
    );
  }

}

