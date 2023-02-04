// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';
import { Modal } from '../Modal/Modal';
import { LoadMoreButton } from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    imagesData: [],
    page: 1,
    loading: false,
    error: null,
    bigImg: null,
    loadMore: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await fetch(
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
      .then(data => this.setState({ imagesData: data.hits, loadMore: true }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  async componentDidUpdate(pP, pS) {
    if (pP.imageQuery !== this.props.imageQuery) {
      this.setState({imagesData:[]})
      await fetch(
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
        .then(data => this.setState({ imagesData: data.hits, loadMore: true }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
    if (pS.page !== this.state.page) {
      await fetch(
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
        .then(data =>
          this.setState({
            imagesData: [...pS.imagesData, ...data.hits],
            loadMore: true,
          })
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  handleClickImg = url => {
    this.setState({ bigImg: url });
  };
  clickLoadMore = page => {
    this.setState({ page });
  };

  render() {
    return (
      <>
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.loading && <Loader />}
        {this.props.imageQuery && <h1>Enter a name or photo</h1>}
        {this.state.imagesData.length > 0 && (
          <ImageGalleryStyle className="gallery">
            <ImageGalleryItem
              data={this.state.imagesData}
              imgUrl={this.handleClickImg}
            />
          </ImageGalleryStyle>
        )}
        {this.state.bigImg && <Modal url={this.state.bigImg} />}
        {this.state.loadMore && (
          <LoadMoreButton onClickLoadMore={this.clickLoadMore} />
        )}
      </>
    );
  }
}
