import PropTypes from 'prop-types';

export function fetchImages(q, page) {
  return fetch(
    `https://pixabay.com/api/?q=${q}&page=${page}&key=31883823-c5d59f7aa30a446f4e70a3159&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`No images for this request ${q}`));
  });
}

fetchImages.protoTypes = {
  q: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
