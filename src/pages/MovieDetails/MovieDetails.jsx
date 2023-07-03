import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';
import * as API from 'servises/api';
import { Img, MovieSection } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieID } = useParams();
  const [searchResult, setSearchResult] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    API.fetchQuery(`3/movie/${movieID}?`)
      .then(res => {
        setSearchResult(res);
      })
      .catch(error => console.log(error));
  }, [movieID]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back</Link>
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
          {console.log(searchResult.genres)}
          <p>
            {searchResult.genres === []
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
