import PropTypes from 'prop-types';
import { ModalStyle } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
  render() {
    return (
      <ModalStyle className="overlay">
        <div className="modal">
          <img src={this.props.url} alt="" />
        </div>
      </ModalStyle>
    );
  }
}

Modal.protoTypes = {
  url: PropTypes.string.isRequired,
};
