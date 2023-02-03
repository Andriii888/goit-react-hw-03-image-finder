// import PropTypes from 'prop-types';
import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ data}) {
  return data.map(({ id, webformatURL, tags, largeImageURL }) => {
    const bigImg = this.props.onClickImg(largeImageURL);
    return (
      <ImageGalleryItemStyle key={id}onClick={bigImg} className="gallery-item">
        <img src={webformatURL} alt={tags} />
      </ImageGalleryItemStyle>
    );
  });
}
