import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';
import { Modal } from '../Modal/Modal';
import { LoadMoreButton } from '../Button/Button';
import { fetchImages } from '../api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};
export class ImageGallery extends PureComponent {
  state = {
    imagesData: null,
    page: 1,
    error: null,
    bigImg: null,
    openModal: false,
    status: Status.IDLE,
    isLoad: false,
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
      this.setState({ imagesData: null, isLoad: true, status: Status.PENDING });

      await fetchImages(this.props.imageQuery, 1)
        .then(data =>
          this.setState({
            isLoad: false,
            imagesData: data.hits,
            status: Status.RESOLVED,
            page: 1,
          })
        )
        .catch(error => this.setState({ error }));
    }
    if (pS.page !== this.state.page && this.state.page !== 1) {
      // this.setState({ isLoad: true,status:Status.PENDING});
      this.setState({ isLoad: true });
      await fetchImages(this.props.imageQuery, this.state.page)
        .then(data => {
          this.setState({
            imagesData: [...pS.imagesData, ...data.hits],
            status: Status.RESOLVED,
            isLoad: false,
          });
        })
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
    if (status === Status.IDLE) {
      return;
    }
    if (status === Status.PENDING) {
      // return <Loader />
    }
    if (status === Status.REJECTED) {
      return <h1>{error.message}</h1>;
    }
    if (status === Status.RESOLVED) {
      return (
        <>
          <ImageGalleryStyle className="gallery">
            <ImageGalleryItem data={imagesData} imgUrl={this.handleClickImg} />
          </ImageGalleryStyle>
          <LoadMoreButton onClick={this.clickLoadMore} page={this.state.page} />
          {this.state.isLoad && <Loader />}
          {/* <Loader /> */}
          {openModal && <Modal url={bigImg} onClose={this.toggleOpenModal} />}
        </>
      );
    }
  }
}

ImageGallery.protoTypes = {
  imageQuery: PropTypes.string.isRequired,
};
