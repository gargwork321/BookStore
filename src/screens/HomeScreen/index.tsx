import React, {useEffect, useState} from 'react';
import TopHeader from './components/topHeader';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {theme} from '../../constants/Colors';
import Greeting from './components/greetings';
import ShowCase from '../../components/Showcase';
import {fetchRandomBooks} from '../../configs/bookApi';
import LocalImages from '../../constants/LocalImages';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = () => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  //Hooks
  useEffect(() => {
    // API call for random books
    getBooks();
  }, []);

  //Functions
  const getBooks = async () => {
    if (!loading) {
      setLoading(true);
    }
    const _ = await fetchRandomBooks({limit: 10, offset: 10}).then(data => {
      setRandomBooks(data.docs);
      const highRatedBooks = data.docs.filter(
        item => item.ratings_average >= 4,
      );
      setPopularBooks(highRatedBooks);
      setLoading(false);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TopHeader />
        <Greeting name="Vivek" />
        {loading && (
          <Image style={styles.loader} source={LocalImages.loading} />
        )}
        {!loading && (
          <>
            <ShowCase
              title="Trending now"
              data={randomBooks}
              isHorizontal={true}
            />
            <ShowCase
              title="Most rated"
              data={popularBooks}
              isHorizontal={false}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  padding: {
    padding: 20,
  },
  loader: {
    height: 200,
    width: 200,
    position: 'absolute',
    left: windowWidth / 2 - 100,
    top: windowHeight / 2 - 100,
  },
});

export default HomeScreen;
