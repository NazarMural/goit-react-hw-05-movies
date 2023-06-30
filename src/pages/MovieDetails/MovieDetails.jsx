import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import * as API from 'servises/api';
import { Img, MovieSection } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieID } = useParams();
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    API.fetchQuery(`3/movie/${movieID}?`)
      .then(res => {
        console.log(res);
        setSearchResult(res);
      })
      .catch(error => console.log(error));
  }, [movieID]);

  return (
    <>
      <MovieSection>
        <Img
          src={
            searchResult.poster_path
              ? `https://image.tmdb.org/t/p/w500${searchResult.poster_path}`
              : 'http://dummyimage.com/150x200/c0c0c0'
          }
          alt=""
        />
        <div>
          <h1>
            {searchResult.original_name ||
              searchResult.original_title ||
              'Not found'}
          </h1>
          <p>User score: {searchResult.vote_average * 10 || 'Not found'}%</p>
          <h3>Overview</h3>
          <p>{searchResult.overview || 'Not found'}</p>
          <h3>Genres</h3>
          <p>
            {searchResult.genres
              ? searchResult.genres.map(genre => genre.name).join(', ')
              : 'Not found'}
          </p>
        </div>
      </MovieSection>
      <hr></hr>
      <section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </section>
      <hr></hr>
      <Outlet />
    </>
  );
};

export default MovieDetails;
