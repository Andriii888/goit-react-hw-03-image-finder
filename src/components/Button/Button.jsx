import PropTypes from 'prop-types';
import { Component } from 'react';
import { ButtonLoadStyle } from './ButtonStyle.styled';

export class LoadMoreButton extends Component {
  handleClickMore = e => {
    this.props.onClickLoadMore(this.props.page + 1);
  };
  render() {
    return (
      <ButtonLoadStyle
        type="button"
        onClick={this.handleClickMore}
        className="button"
      >
        Load More
      </ButtonLoadStyle>
    );
  }
}
LoadMoreButton.protoTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
