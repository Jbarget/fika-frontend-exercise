import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getColor, getSpace } from '../themeHelpers';
import { GenreMap, Movie } from '../types';
import GenreList from './GenreList';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500/';

interface MovieCardProps {
  movie: Movie;
  genres: GenreMap;
}
const MovieCard: FC<MovieCardProps> = ({ movie, genres }) => {
  const imgSource = { uri: `${IMAGE_BASE}${movie.poster_path}` };
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        resizeMethod='resize'
        source={imgSource}
        style={styles.image}
        blurRadius={1}
      />
      <View style={styles.movieInfo}>
        <Text style={styles.title}>{movie.title}</Text>
        <GenreList genreIds={movie.genre_ids} genres={genres} />
        {/* TODO: display more info about the movie */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 250,
    marginHorizontal: getSpace(2),
    shadowColor: getColor('richBlack'),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 7,
  },
  image: {
    aspectRatio: 0.66,
    width: '100%',
    marginBottom: getSpace(4),
    borderRadius: 5,
  },
  movieInfo: {
    flex: 1,
    width: '100%',
    paddingVertical: getSpace(2),
    paddingHorizontal: getSpace(3),
    marginHorizontal: getSpace(2),
    marginBottom: getSpace(4),
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    marginBottom: getSpace(2),
  },
});

export default MovieCard;
