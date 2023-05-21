import React, {useEffect, useState} from 'react';
import TopHeader from './components/topHeader';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {theme} from '../../constants/Colors';
import Greeting from './components/greetings';
import ShowCase from '../../components/Showcase';
import {fetchRandomBooks} from '../../configs/bookApi';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = () => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);

  //Hooks
  useEffect(() => {
    // API call for random books
    getBooks();
  }, []);

  //Functions
  const getBooks = async () => {
    const _ = await fetchRandomBooks({limit: 10, offset: 10}).then(data => {
      setRandomBooks(data.docs);
      const highRatedBooks = data.docs.filter(
        item => item.ratings_average >= 4,
      );
      setPopularBooks(highRatedBooks);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TopHeader />
        <Greeting name="Vivek" />
        <ShowCase title="Trending now" data={randomBooks} isHorizontal={true} />
        <ShowCase title="Most rated" data={popularBooks} isHorizontal={false} />
      </View>
    </SafeAreaView>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  padding: {
    padding: 20,
  },
});

export default HomeScreen;
