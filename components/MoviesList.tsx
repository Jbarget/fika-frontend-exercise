import React, { FC } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo } from 'react-native';
import { GenreMap, Movie } from '../types';
import MovieCard from './MovieCard';

interface MoviesListProps {
  movies: Movie[];
  genres: GenreMap;
  isFetchingMovies: boolean;
}

const MoviesList: FC<MoviesListProps> = ({
  movies,
  isFetchingMovies,
  genres,
}) => {
  const renderItem = ({ item: movie }: ListRenderItemInfo<Movie>) => (
    <MovieCard movie={movie} genres={genres} />
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
