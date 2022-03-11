import React, { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GenreMap } from '../types';
import Chip from './Chip';

interface GenreListProps {
  genreIds: number[];
  genres: GenreMap;
}

const MAX_GENRES = 3;

const GenreList: FC<GenreListProps> = ({ genreIds, genres }) => {
  const remainder = genreIds.length - MAX_GENRES;
  const genresToShow = remainder < 0 ? genreIds : genreIds.slice(0, MAX_GENRES);
  return (
    <View style={styles.genres}>
      {genresToShow.map((genre) => {
        return <Chip key={genre} label={genres[genre]?.name} />;
      })}
      {remainder > 0 && <Text>+{remainder} more</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export default GenreList;
