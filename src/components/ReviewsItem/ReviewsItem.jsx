import React from 'react';
import PropTypes from 'prop-types';

const ReviewsItem = ({ item }) => {
  return (
    <li>
      <p>{item.author || 'Not found'}</p>
      <p>{item.content || 'Not found'}</p>
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
