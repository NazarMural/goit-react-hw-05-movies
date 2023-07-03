import React from 'react';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import { useEffect, useState } from 'react';
import * as API from 'servises/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchQuery('3/trending/all/day?')
      .then(res => {
        setMovies([...res.results]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <ul>
      {movies.length &&
        movies.map(movie => <GalleryItem key={movie.id} item={movie} />)}
    </ul>
  );
};

export default Home;
