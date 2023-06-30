import React from 'react';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieID" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
