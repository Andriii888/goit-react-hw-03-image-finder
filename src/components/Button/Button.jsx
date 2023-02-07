import PropTypes from 'prop-types';
import { ButtonLoadStyle } from './ButtonStyle.styled';

export function LoadMoreButton({ onClick, page }) {
  const currentPage = page + 1;
  return (
    <ButtonLoadStyle
      type="button"
      onClick={e => {
        e.preventDefault();
        return onClick(currentPage);
      }}
      className="button"
    >
      Load More
    </ButtonLoadStyle>
  );
}

LoadMoreButton.protoTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};
