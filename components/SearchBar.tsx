import React, { FC, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { getColor, getSpace } from '../themeHelpers';

interface SearchBarProps {
  resultsLength: number;
  totalMovies: number;
}
const SearchBar: FC<SearchBarProps> = ({ resultsLength, totalMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onChangeText = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name='search' size={24} color={getColor('pewterBlue')} />
        <TextInput
          style={styles.input}
          value={searchTerm}
          onChangeText={onChangeText}
        />
      </View>
      <Text style={styles.resultsText}>
        {resultsLength} of {totalMovies} results
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: getSpace(5),
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: getColor('pewterBlue'),
    borderRadius: 20,
    paddingHorizontal: getSpace(3),
    paddingVertical: getSpace(2),
    width: '80%',
    marginBottom: getSpace(2),
    borderWidth: 2,
  },
  input: {
    flex: 1,
    marginLeft: getSpace(2),
    color: getColor('richBlack'),
  },
  resultsText: {
    color: getColor('richBlack'),
    fontSize: 16,
  },
});

export default SearchBar;
