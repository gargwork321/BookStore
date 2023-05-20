import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {theme} from '../../constants/Colors';
import NavigationBar from '../../components/navigationBar';
import MainDetails from './components/MainDeatils';
import MoreDetails from './components/MoreDetails';

const BookDetailScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <MainDetails book={undefined} />
      <MoreDetails book={undefined} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  padding: {
    padding: 20,
  },
});

export default BookDetailScreen;
