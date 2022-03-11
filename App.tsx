import { FC, useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import api from './api';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoviesList';
import { GenreMap, Movie } from './types';
import { getSpace } from './themeHelpers';
import { useDebouncedCallback } from 'use-debounce';

const App: FC = () => {
  const [hasError, setHasError] = useState(false);
  const [isFetchingMovies, setIsFetchingMovies] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<GenreMap>({});
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalPages, setTotalPages] = useState(0); // TODO: add pagination
  const [page, setPageNumber] = useState(0); // TODO: add pagination

  const fetchMovies = useCallback(() => {
    setIsFetchingMovies(true);

    api
      .fetchMovies()
      .then((data) => {
        setMovies(data.results);
        setPageNumber(data.page);
        setTotalMovies(data.total_results);
        setTotalPages(data.total_pages);
      })
      .catch((e) => {
        console.error(e);
        setHasError(true);
      })
      .finally(() => {
        setIsFetchingMovies(false);
      });
  }, []);

  const fetchGenres = useCallback(() => {
    setIsFetchingMovies(true);
    api
      .fetchGenres()
      .then((data) => {
        const genreMap = data.genres.reduce((accum, cur) => {
          accum[cur.id] = cur;
          return accum;
        }, {} as GenreMap);
        setGenres(genreMap);
      })
      .catch((e) => {
        console.error(e);
        setHasError(true);
      })
      .finally(() => {
        setIsFetchingMovies(false);
      });
  }, []);

  const searchMovies = (searchTerm: string) => {
    setIsFetchingMovies(true);
    setHasError(false);
    api
      .searchMovies({ searchTerm })
      .then((data) => {
        setMovies(data.results);
        setPageNumber(data.page);
        setTotalMovies(data.total_results);
        setTotalPages(data.total_pages);
      })
      .catch((e) => {
        console.error(e);
        setHasError(true);
      })
      .finally(() => {
        setIsFetchingMovies(false);
      });
  };

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);

  const onSearch = useDebouncedCallback((searchTerm: string) => {
    if (searchTerm === '') return fetchMovies();

    searchMovies(searchTerm);
  }, 400);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        totalMovies={totalMovies}
        resultsLength={movies.length}
        onSearch={onSearch}
      />
      <MoviesList
        movies={movies}
        isFetchingMovies={isFetchingMovies}
        genres={genres}
        hasError={hasError}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getSpace(8),
    alignItems: 'center',
  },
});

export default App;
