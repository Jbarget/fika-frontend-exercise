import { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
