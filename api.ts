import { GenreData, MoviesData } from './types';

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

const fetchGenres = async (): Promise<GenreData> => {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US'
    );

    return await res.json();
  } catch (e) {
    throw e;
  }
};

const searchMovies = async ({
  searchTerm,
}: {
  searchTerm: string;
}): Promise<MoviesData> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=${searchTerm}`
    );

    return await res.json();
  } catch (e) {
    throw e;
  }
};

const api = {
  fetchMovies,
  fetchGenres,
  searchMovies,
};

export default api;
