import { Component } from 'react';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppStyle } from './AppStyle.styled';

export class App extends Component {
  state = {
    imageQuery: '',
  };

  handleForSubmit = imageQuery => {
    this.setState({ imageQuery });
  };

  render() {
    return (
      <AppStyle>
        <SearchBar onSubmit={this.handleForSubmit} />
        <ImageGallery imageQuery={this.state.imageQuery} />
      </AppStyle>
    );
  }
}
