import { FC, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import api from './api';
import SearchBar from './components/SearchBar';
import { Movie } from './types';

const App: FC = () => {
  const [hasError, setHasError] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await api.fetchMovies();
        setMovies(data.results);
        setPageNumber(data.page);
        setTotalMovies(data.total_results);
        setTotalPages(data.total_pages);
      } catch (e) {
        console.error(e);
        setHasError(true);
      }
    };

    fetchMovies();
  });

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
