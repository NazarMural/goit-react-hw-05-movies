import React from 'react';
import PropTypes from 'prop-types';

const CastItem = ({ item }) => {
  return (
    <>
      <li>
        <img
          src={
            item.profile_path !== null
              ? 'https://image.tmdb.org/t/p/w500' + item.profile_path
              : 'http://dummyimage.com/150x200/c0c0c0'
          }
          alt={item.name}
          width={200}
        />
        <p>{item.name || 'Not found'}</p>
        <p>Character: {item.character || 'Not found'}</p>
      </li>
    </>
  );
};
export default CastItem;

CastItem.propTypes = {
  item: PropTypes.object.isRequired,
};
