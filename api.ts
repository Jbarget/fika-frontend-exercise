import { MoviesData } from './types';

const fetchMovies = async (): Promise<MoviesData> => {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false'
    );
    return await res.json();
  } catch (e) {
    throw e;
  }
};

const api = {
  fetchMovies,
};

export default api;
