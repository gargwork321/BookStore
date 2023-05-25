import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import NavigationBar from './../../components/navigationBar';
import BookThumbnail from '../../components/BookThumbnail';
import LocalImages from '../../constants/LocalImages';
import styles from './styles';
import {Strings} from '../../constants/Strings';
import {fetchRandomBooks} from '../../network/network';

const ListingScreen: React.FC = ({route}) => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const listTitle = route.params.title;
  const isSearching = route.params.isSearching;
  const [loadMore, setLoadMore] = useState<boolean>(false);
  let pageRef = useRef<number>(0);
  const {searchByAuthor, searchByTitle} = Strings.searching;

  //Hooks
  useEffect(() => {
    // API call for random books
    if (!isSearching) getBooks();
  }, []);

  useEffect(() => {
    if (loadMore) {
      pageRef.current = pageRef.current + 10;
      getBooks();
    }
  }, [loadMore]);

  //Functions
  const getBooks = async () => {
    if (error) {
      setError(false);
    }
    if (!loading && !loadMore) {
      setLoading(true);
    }
    const result = await fetchRandomBooks({limit: 10, offset: pageRef.current});
    const books = result?.docs;
    if (books) {
      loadMore
        ? setRandomBooks(prevState => [...prevState, ...books])
        : setRandomBooks(books);
    } else {
      setError(true);
    }
    loadMore ? setLoadMore(false) : setLoading(false);
  };

  const showMore = () => {
    if (randomBooks?.length > 9) {
      setLoadMore(true);
    }
  };

  const renderItem = ({item}) => (
    <BookThumbnail book={item} isHorizontal={false} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <Image style={styles.bookStack} source={LocalImages.bookStack} />
      {loading && <Image style={styles.loader} source={LocalImages.loading} />}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{listTitle}</Text>
      </View>
      <FlatList
        data={randomBooks}
        extraData={randomBooks}
        showsHorizontalScrollIndicator={false}
        renderItem={item => renderItem(item)}
        style={styles.padding}
        onEndReachedThreshold={0.01}
        onEndReached={showMore}
      />
    </SafeAreaView>
  );
};

export default ListingScreen;
