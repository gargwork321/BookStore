import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import TopHeader from './components/TopHeader/topHeader';
import Greeting from './components/Greetings/greetings';
import ShowCase from '../../components/Showcase';
import LocalImages from '../../constants/LocalImages';
import {Strings} from '../../constants/Strings';
import styles from './styles';
import {fetchRandomBooks} from '../../network/network';
import {useDispatch, useSelector} from 'react-redux';
import {SET_RANDOM_BOOKS, SET_POPULAR_BOOK} from '../../redux/actions';

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {dummyUser} = Strings.homepage;
  const {trending, mostRated} = Strings.showcase;
  //Redux
  const randomBooks = useSelector(state => state?.book?.randomBooks);
  const popularBooks = useSelector(state => state?.book?.popularBooks);
  const dispatch = useDispatch();

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
      dispatch({type: SET_RANDOM_BOOKS, payload: data.docs});
      const highRatedBooks = data.docs.filter(
        item => item.ratings_average >= 4,
      );
      dispatch({type: SET_POPULAR_BOOK, payload: highRatedBooks});
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
