// import PropTypes from 'prop-types';
// import { PureComponent } from 'react';
// import { Loader } from '../Loader/Loader';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { ImageGalleryStyle } from './ImageGallery.styled';
// import { Modal } from '../Modal/Modal';
// import { LoadMoreButton } from '../Button/Button';
// import { fetchImages } from '../api';

// export class ImageGallery extends PureComponent {
//   state = {
//     imagesData: null,
//     page: 1,
//     error: null,
//     bigImg: null,
//     openModal: false,
//     status: 'idle',
//     isLoad:false,
//   };

//   //  async componentDidMount() {
//   //       this.setState({ loading: true });
//   //     await fetchImages(this.props.imageQuery, this.state.page)
//   //       .then(data => this.setState({ imagesData: data.hits, loadMore: true }))
//   //       .catch(error => this.setState({ error }))
//   //       .finally(() => this.setState({ loading: false }));
//   //   }
//   async componentDidUpdate(pP, pS) {
//     if (pP.imageQuery !== this.props.imageQuery) {
//       this.setState({ isLoad: true });

//       await fetchImages(this.props.imageQuery, 1)
//         .then(data =>
//           this.setState({ imagesData: data.hits,isLoad:false, status: 'resolved', page: 1 })
//         )
//         .catch(error => this.setState({ error }));
//     }
//     if (pS.page !== this.state.page && this.state.page !== 1) {
//       this.setState({ isLoad: true });
//       await fetchImages(this.props.imageQuery, this.state.page)
//       .then(data =>
//           this.setState({
//             isLoad:false,
//             status: 'resolved',
//             imagesData: [...pS.imagesData, ...data.hits],
//           })
//         )
//         .catch(error => this.setState({ error }));
//     }
//   }
//   handleClickImg = url => {
//     this.setState({ bigImg: url, openModal: true });
//   };

//   clickLoadMore = page => {
//     this.setState({ page });
//   };

//   toggleOpenModal = () => {
//     this.setState(({ openModal }) => ({ openModal: !openModal }));
//   };

//   render() {
//     const { imagesData, error, bigImg, openModal, status } = this.state;
//     if (status === 'idle') {
//       return;
//     }
//     if (status === 'pending') {
//       // return <Loader />;
//     }
//     if (status === 'rejected') {
//       return <h1>{error.message}</h1>;
//     }
//     if (status === 'resolved') {
//       return (
//         <>
//           <ImageGalleryStyle className="gallery">
//             <ImageGalleryItem data={imagesData} imgUrl={this.handleClickImg} />
//           </ImageGalleryStyle>
//           <LoadMoreButton
//             onClick={this.clickLoadMore}
//             page={this.state.page}
//           />
//           {this.state.isLoad && <Loader />}
//           {openModal && <Modal url={bigImg} onClose={this.toggleOpenModal} />}
//         </>
//       );
//     }
//   }
// }

// ImageGallery.protoTypes = {
//   imageQuery: PropTypes.string.isRequired,
// };
////////////////////////////////////
// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { Loader } from '../Loader/Loader';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { ImageGalleryStyle } from './ImageGallery.styled';
// import { Modal } from '../Modal/Modal';
// import { LoadMoreButton } from '../Button/Button';
// import { fetchImages } from '../api';

// export class ImageGallery extends Component {
//   state = {
//     imagesData: [],
//     page: 1,
//     loading: false,
//     error: null,
//     bigImg: null,
//     loadMore: false,
//     openModal: false,
//     status:'idle',
//   };

//   //  async componentDidMount() {
//   //       this.setState({ loading: true });
//   //     await fetchImages(this.props.imageQuery, this.state.page)
//   //       .then(data => this.setState({ imagesData: data.hits, loadMore: true }))
//   //       .catch(error => this.setState({ error }))
//   //       .finally(() => this.setState({ loading: false }));
//   //   }
//   async componentDidUpdate(pP, pS) {
//     if (pP.imageQuery !== this.props.imageQuery) {
//       this.setState({ imagesData: [], loading: true });

//       await fetchImages(this.props.imageQuery, this.state.page)
//         .then(data => this.setState({ imagesData: data.hits, loadMore: true }))
//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//     if (pS.page !== this.state.page) {
//       this.setState({ loading: true });

//       await fetchImages(this.props.imageQuery, this.state.page)
//         .then(data =>
//           this.setState({
//             imagesData: [...pS.imagesData, ...data.hits],
//             loadMore: true,
//           })
//         )
//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }
//   handleClickImg = url => {
//     this.setState({ bigImg: url, openModal: true });
//   };

//   clickLoadMore = page => {
//     this.setState({ page });
//   };

//   toggleOpenModal = () => {
//     this.setState(({ openModal }) => ({ openModal: !openModal }));
//   };

//   render() {
//     return (
//       <>
//         {this.state.error && <h1>{this.state.error.message}</h1>}
//         {this.state.loading && <Loader />}
//         {this.state.imagesData.length > 0 && (
//           <ImageGalleryStyle className="gallery">
//             <ImageGalleryItem
//               data={this.state.imagesData}
//               imgUrl={this.handleClickImg}
//             />
//           </ImageGalleryStyle>
//         )}
//         {this.state.openModal && (
//           <Modal url={this.state.bigImg} onClose={this.toggleOpenModal} />
//         )}
//         {this.state.loadMore && (
//           <LoadMoreButton onClickLoadMore={this.clickLoadMore} />
//         )}
//       </>
//     );
//   }
// }
// ImageGallery.protoTypes = {
//   imageQuery: PropTypes.string.isRequired,
// }
