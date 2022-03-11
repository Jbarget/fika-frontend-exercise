import React, { FC } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { getColor, getSpace } from '../themeHelpers';

interface ChipProps {
  label: string | undefined;
}
const Chip: FC<ChipProps> = ({ label }) => {
  if (!label) return null;
  return (
    <View style={styles.chip}>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: getColor('cadetGrey'),
    borderRadius: 20,
    paddingHorizontal: getSpace(4),
    paddingVertical: getSpace(2),
    marginRight: getSpace(2),
    marginBottom: getSpace(1),
  },
});

export default Chip;
