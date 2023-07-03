import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const GalleryItem = ({ item }) => {
  const location = useLocation();
  
  return (
    <li>
      <Link to={`/movies/${item.id}`} state={{ from: location }}>
        {item.original_name || item.original_title}
      </Link>
    </li>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};