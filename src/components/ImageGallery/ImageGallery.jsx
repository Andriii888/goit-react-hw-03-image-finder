// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import {ImageGalleryStyle} from './ImageGallery.styled'
import {Modal} from '../Modal/Modal';


export class ImageGallery extends Component {
  state = {
    imagesData: null,
    page: 1,
    loading: false,
    error: null,
    status: 'idle',
    bigImgUrl:null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageQuery !== this.props.imageQuery) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.imageQuery}&page=${this.state.page}&key=31883823-c5d59f7aa30a446f4e70a3159&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(`No images for this request ${this.props.imageQuery}`)
          );
        })
        .then(data => this.setState({ imagesData: data.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

handleClickBigImage=(url)=>{
return this.setState({bigImgUrl:url})
}

  render() {
    return (
      <>
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.loading && <Loader />}
        {!this.props.imageQuery && <h1>Enter a name or photo</h1>}
        {this.state.imagesData && (
                
          <ImageGalleryStyle className="gallery">
            {this.state.bigImgUrl && <Modal url={this.state.imgURL}/>}
            <ImageGalleryItem data={this.state.imagesData} onClickImg={this.handleClickBigImage} />
          </ImageGalleryStyle>
        )}
      </>
    );
  }
}
