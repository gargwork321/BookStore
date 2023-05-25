import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import TopHeader from './components/TopHeader/topHeader';
import Greeting from './components/Greetings/greetings';
import ShowCase from '../../components/Showcase';
import LocalImages from '../../constants/LocalImages';
import {Strings} from '../../constants/Strings';
import styles from './styles';
import {fetchRandomBooks} from '../../network/network';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = () => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const {dummyUser} = Strings.homepage;
  const {trending, mostRated} = Strings.showcase;
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
        <Greeting name={dummyUser} />
        {loading && (
          <Image style={styles.loader} source={LocalImages.loading} />
        )}
        {!loading && (
          <>
            <ShowCase title={trending} data={randomBooks} isHorizontal={true} />
            <ShowCase
              title={mostRated}
              data={popularBooks}
              isHorizontal={false}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
