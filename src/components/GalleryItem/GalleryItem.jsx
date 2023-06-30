import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ item }) => {
  return (
    <li>
      <Link to={`/movies/${item.id}`}>
        {item.original_name || item.original_title}
      </Link>
    </li>
  );
};

export default GalleryItem;
