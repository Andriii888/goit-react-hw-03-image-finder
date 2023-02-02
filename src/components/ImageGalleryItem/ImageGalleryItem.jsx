// import PropTypes from 'prop-types';
import { Component } from 'react';

export class ImageGalleryItem extends Component {

    render () {
        console.log(this.props.data)
        return (<li className="gallery-item">
        <img src="" alt="" />
      </li>)
    }
}