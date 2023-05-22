import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {palette, theme} from '../../constants/Colors';
import NavigationBar from './../../components/navigationBar';
import BookThumbnail from '../../components/BookThumbnail';
import Font from '../../constants/Fonts';
import {fetchRandomBooks, searchBookByTitle} from '../../configs/bookApi';
import SearchBox from '../../components/SearchBox';
import LocalImages from '../../constants/LocalImages';

const ListingScreen: React.FC = ({route}) => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const listTitle = route.params.title;
  const isSearching = route.params.isSearching;
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>('');
  let pageRef = useRef<number>(0);

  //Hooks
  useEffect(() => {
    // API call for random books
    if (!isSearching) getBooks();
  }, []);

  useEffect(() => {
    if (loadMore) {
      pageRef.current = pageRef.current + 10;
      isSearching ? searchBook(searchString) : getBooks();
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

  const searchBook = async text => {
    const result = await searchBookByTitle(text, 10);
    const books = result?.docs;
    if (books) {
      console.log('seached books', books);
      loadMore
        ? setRandomBooks(prevState => [...prevState, ...books])
        : setRandomBooks(books);
    } else {
      setError(true);
    }
  };

  const showMore = () => {
    if (randomBooks?.length > 9) {
      setLoadMore(true);
    }
  };

  const getUpdatedText = value => {
    setSearchString(value);
    console.log('value receivied =>', value, searchString);
    searchBook(value);
  };

  const renderItem = ({item}) => (
    <BookThumbnail book={item} isHorizontal={false} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <Image style={styles.bookStack} source={LocalImages.bookStack} />
      {loading && <Image style={styles.loader} source={LocalImages.loading} />}
      <Text style={styles.title}>{listTitle}</Text>
      {isSearching && (
        <SearchBox handleSearch={getUpdatedText} placeholder="Search Books" />
      )}
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  padding: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    color: palette.WHITE,
    fontFamily: Font.VERDANA,
    fontWeight: '500',
    margin: 20,
  },
  bookStack: {
    height: 200,
    width: 200,
    position: 'absolute',
    right: 10,
    top: 50,
    opacity: 0.2,
  },
  loader: {
    height: 200,
    width: 200,
    position: 'absolute',
    left: windowWidth / 2 - 100,
    top: windowHeight / 2 - 100,
  },
});

export default ListingScreen;
