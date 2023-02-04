import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  handleClickBigImg = e => {
    this.props.imgUrl(e.target.align);
  };

  render() {
    const { data } = this.props;

    return data.map(({ id, webformatURL, tags, largeImageURL }) => {
      return (
        <ImageGalleryItemStyle key={id} className="gallery-item">
          <img
            src={webformatURL}
            alt={tags}
            align={largeImageURL}
            onClick={this.handleClickBigImg}
          />
        </ImageGalleryItemStyle>
      );
    });
  }
}
ImageGalleryItem.protoTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  imgUrl: PropTypes.string.isRequired,
};
