import { FC, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import api from './api';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoviesList';
import { GenreMap, Movie } from './types';
import { getSpace } from './themeHelpers';

const App: FC = () => {
  const [hasError, setHasError] = useState(false);
  const [isFetchingMovies, setIsFetchingMovies] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<GenreMap>({});
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsFetchingMovies(true);
      try {
        const data = await api.fetchMovies();
        setMovies(data.results);
        setPageNumber(data.page);
        setTotalMovies(data.total_results);
        setTotalPages(data.total_pages);
      } catch (e) {
        console.error(e);
        setHasError(true);
      } finally {
        setIsFetchingMovies(false);
      }
    };

    const fetchGenres = async () => {
      setIsFetchingMovies(true);
      try {
        const data = await api.fetchGenres();
        const genreMap = data.genres.reduce((accum, cur) => {
          accum[cur.id] = cur;
          return accum;
        }, {} as GenreMap);
        setGenres(genreMap);
      } catch (e) {
        console.error(e);
        setHasError(true);
      } finally {
        setIsFetchingMovies(false);
      }
    };

    Promise.all([fetchMovies(), fetchGenres()]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar totalMovies={totalMovies} resultsLength={movies.length} />
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
