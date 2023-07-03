import React from 'react';
import CastItem from 'components/CastItem/CastItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'servises/api';

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    API.fetchQuery(`3/movie/${movieID}/credits?`)
      .then(response => {
        setCast([...response.cast]);
      })
      .catch(() => {
        console.log('error');
      });
  }, [movieID]);

  return (
    <ul>
      {[cast.length] &&
        cast.map(item => <CastItem key={item.id} item={item} />)}
    </ul>
  );
};
export default Cast;
