import { FC, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import api from './api';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoviesList';
import { Movie } from './types';
import { getColor, getSpace } from './themeHelpers';
import { StatusBar } from 'expo-status-bar';

const App: FC = () => {
  const [hasError, setHasError] = useState(false);
  const [isFetchingMovies, setIsFetchingMovies] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
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

    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar totalMovies={totalMovies} resultsLength={movies.length} />

      <MoviesList movies={movies} isFetchingMovies={isFetchingMovies} />
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
