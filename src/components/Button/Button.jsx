import PropTypes from 'prop-types';
import { Component } from 'react';
import { ButtonLoadStyle } from './ButtonStyle.styled';

export class LoadMoreButton extends Component {
  state = {
    page: 1,
  };
  handleClickMore = () => {
    this.setState({ page: this.state.page + 1 });
    this.props.onClickLoadMore(this.state.page + 1);
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
