import React, { FC } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo } from 'react-native';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MoviesListProps {
  movies: Movie[];
  isFetchingMovies: boolean;
}

const MoviesList: FC<MoviesListProps> = ({ movies, isFetchingMovies }) => {
  const renderItem = ({ item: movie }: ListRenderItemInfo<Movie>) => (
    <MovieCard movie={movie} />
  );

  return isFetchingMovies ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      refreshing={isFetchingMovies}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export default MoviesList;
