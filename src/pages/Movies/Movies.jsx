import React from 'react';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from 'servises/api';

const Movies = () => {
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [notification, setNotification] = useState(false);

  const handleChange = e => setValue(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return Notify.warning('Write a request!');
    }
    // setNameMovie(value);

    setSearchParams({ query: value });
    setValue('');
  };

  useEffect(() => {
    const movie = searchParams.get('query');
    if (movie) {
      API.fetchQuery(`3/search/movie?query=${movie}&`)
        .then(res => {
          if (res.results.length === 0) {
            setNotification(true);
          } else {
            setNotification(false);
          }
          setSearchResult([...res.results]);
        })
        .catch(error => console.log(error));
    }
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchMovie"
          value={value}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <ul>
        {searchResult.map(movie => (
          <GalleryItem key={movie.id} item={movie} />
        ))}
      </ul>
      {notification ? (
        <p>There are no movies with the name "{searchParams.get('query')}".</p>
      ) : null}
    </>
  );
};

export default Movies;
