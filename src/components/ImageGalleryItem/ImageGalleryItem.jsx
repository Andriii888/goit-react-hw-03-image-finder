// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';


export class ImageGalleryItem extends Component {
 
 handleClickBigImg=(e)=>{
  // this.setState({bigImg:e.target.align});
  this.props.imgUrl(e.target.align);
 }

  render() {
    const { data} = this.props;

  
    return  data.map(({ id, webformatURL, tags, largeImageURL }) => {
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
