const BASE_URl = 'https://api.themoviedb.org/';
const KEY = 'd9889a4b017e04f28be44670743011f8';

export const fetchQuery = async query => {
  const res = await fetch(`${BASE_URl}${query}api_key=${KEY}`);
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(new Error('error'));
};
