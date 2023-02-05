import PropTypes from 'prop-types';
import { ModalStyle } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropeClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalStyle className="overlay" onClick={this.handleBackDropeClick}>
        <div className="modal">
          <img src={this.props.url} alt="" />
        </div>
      </ModalStyle>,
      modalRoot
    );
  }
}

Modal.protoTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
