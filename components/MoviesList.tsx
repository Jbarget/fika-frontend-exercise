import React, { FC } from 'react';
import {
  ActivityIndicator,
  Text,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { GenreMap, Movie } from '../types';
import MovieCard from './MovieCard';

interface MoviesListProps {
  movies: Movie[];
  genres: GenreMap;
  isFetchingMovies: boolean;
  hasError: boolean;
}

const MoviesList: FC<MoviesListProps> = ({
  movies,
  isFetchingMovies,
  genres,
  hasError,
}) => {
  const renderItem = ({ item: movie }: ListRenderItemInfo<Movie>) => (
    <MovieCard movie={movie} genres={genres} />
  );

  if (hasError) {
    return <Text>:( there was an error getting some movies for you</Text>;
  }
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
