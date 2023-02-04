import PropTypes from 'prop-types';
import { Component } from 'react';
import { SearchBarStyle } from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    imageQuery: '',
  };

  handleQueryChange = e => {
    e.preventDefault();
    this.setState({ imageQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.imageQuery);
    this.setState({ imageQuery: '' });
  };

  render() {
    return (
      <SearchBarStyle className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="imageQuery"
            value={this.state.imageQuery}
            onChange={this.handleQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </SearchBarStyle>
    );
  }
}
SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
