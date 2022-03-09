import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getColor, getSpace } from '../themeHelpers';
import { Movie } from '../types';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500/';

interface MovieCardProps {
  movie: Movie;
}
const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const imgSource = { uri: `${IMAGE_BASE}${movie.poster_path}` };
  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        source={imgSource}
        style={styles.image}
        blurRadius={1}
      />
      <View style={styles.movieInfo}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.genres}>
          {movie.genre_ids.map((genre) => {
            return <Text key={genre}>{genre}</Text>;
          })}
        </View>
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
    width: 250,
    marginBottom: getSpace(4),
    borderRadius: 5,
  },
  movieInfo: {
    flex: 1,
    width: '90%',
    backgroundColor: getColor('pewterBlue'),
    paddingVertical: getSpace(2),
    paddingHorizontal: getSpace(3),
    marginHorizontal: getSpace(2),
    marginBottom: getSpace(4),
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    marginBottom: getSpace(3),
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default MovieCard;
