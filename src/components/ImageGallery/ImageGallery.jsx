import PropTypes from 'prop-types';
import { Component } from 'react';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';
import { Modal } from '../Modal/Modal';
import { LoadMoreButton } from '../Button/Button';
import { fetchImages } from '../api';

export class ImageGallery extends Component {
  state = {
    imagesData: [],
    page: 1,
    error: null,
    bigImg: null,
    openModal: false,
    status: 'idle',
  };

  //  async componentDidMount() {
  //       this.setState({ loading: true });
  //     await fetchImages(this.props.imageQuery, this.state.page)
  //       .then(data => this.setState({ imagesData: data.hits, loadMore: true }))
  //       .catch(error => this.setState({ error }))
  //       .finally(() => this.setState({ loading: false }));
  //   }
  async componentDidUpdate(pP, pS) {
    if (pP.imageQuery !== this.props.imageQuery) {
      // this.setState({ imagesData: [], loading: true });
      this.setState({ imagesData: [], status: 'pending' });

      await fetchImages(this.props.imageQuery, this.state.page)
        .then(data =>
          this.setState({ imagesData: data.hits, status: 'resolved' })
        )
        .catch(error => this.setState({ error }));
    }
    if (pS.page !== this.state.page) {
      await fetchImages(this.props.imageQuery, this.state.page)
        .then(data =>
          this.setState({
            imagesData: [...pS.imagesData, ...data.hits],
            status: 'resolved',
          })
        )
        .catch(error => this.setState({ error }));
    }
  }
  handleClickImg = url => {
    this.setState({ bigImg: url, openModal: true });
  };

  clickLoadMore = page => {
    this.setState({ page });
  };

  toggleOpenModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  render() {
    const { imagesData, error, bigImg, openModal, status } = this.state;
    if (status === 'idle') {
      return;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryStyle className="gallery">
            <ImageGalleryItem data={imagesData} imgUrl={this.handleClickImg} />
          </ImageGalleryStyle>
          <LoadMoreButton onClickLoadMore={this.clickLoadMore} />
          {openModal && <Modal url={bigImg} onClose={this.toggleOpenModal} />}
        </>
      );
    }
  }
}

ImageGallery.protoTypes = {
  imageQuery: PropTypes.string.isRequired,
};
