import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { getColor, getSpace } from '../themeHelpers';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const onChangeText = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.container}>
      <Feather name='search' size={24} color={getColor('pewterBlue')} />
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: getColor('cadetGrey'),
    borderRadius: 20,
    paddingHorizontal: getSpace(3),
    paddingVertical: getSpace(2),
    width: '80%',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    marginLeft: getSpace(2),
    color: getColor('richBlack'),
    // backgroundColor: getColor('darkLiver'),
  },
});

export default SearchBar;
