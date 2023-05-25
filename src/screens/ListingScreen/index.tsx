import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import NavigationBar from './../../components/navigationBar';
import BookThumbnail from '../../components/BookThumbnail';
import Font from '../../constants/Fonts';
import {
  fetchRandomBooks,
  searchAuthors,
  searchBookByTitle,
  searchBooksByAuthors,
} from '../../configs/bookApi';
import SearchBox from '../../components/SearchBox';
import LocalImages from '../../constants/LocalImages';
import styles from './styles';
import {Strings} from '../../constants/Strings';

const ListingScreen: React.FC = ({route}) => {
  const [randomBooks, setRandomBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isByTitle, setIsByTitle] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const listTitle = route.params.title;
  const isSearching = route.params.isSearching;
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>('');
  let pageRef = useRef<number>(0);
  const {searchByAuthor, searchByTitle, placeholder} = Strings.searching;

  //Hooks
  useEffect(() => {
    console.log(isByTitle);
    isByTitle ? searchBook(searchString) : searchBookByAuthor(searchString);
  }, [searchString]);

  useEffect(() => {
    // API call for random books
    if (!isSearching) getBooks();
  }, []);

  useEffect(() => {
    if (loadMore) {
      pageRef.current = pageRef.current + 10;
      isSearching
        ? isByTitle
          ? searchBook(searchString)
          : searchBookByAuthor(searchString)
        : getBooks();
    }
  }, [loadMore]);

  useEffect(() => {
    setRandomBooks([]);
    isByTitle ? searchBook(searchString) : searchBookByAuthor(searchString);
  }, [isByTitle]);

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
    if (text === '') return;
    const result = await searchBookByTitle(text, 10);
    const books = result?.docs;
    if (books) {
      loadMore
        ? setRandomBooks(prevState => [...prevState, ...books])
        : setRandomBooks(books);
    } else {
      setError(true);
    }
  };

  const searchBookByAuthor = async text => {
    if (text === '') return;
    const result = await searchAuthors(text, 10);
    const authors = result?.docs;
    // if (authors) {
    console.log('seached author', authors);
    for (let author of authors) {
      const key = author.key;
      const res = searchBooksByAuthors(key, 10).then(data => {
        console.log('book', data);
        const books = data.docs;
        setRandomBooks(prevState => [...prevState, ...books]);
      });
    }
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
        <Text style={styles.title}>
          {listTitle}
          {isSearching ? (isByTitle ? searchByTitle : searchByAuthor) : ''}
        </Text>
        {isSearching && (
          <Switch
            trackColor={{true: Colors.DEEP_SPACE_SPARKLE}}
            ios_backgroundColor={Colors.FRENCH_SKY_BLUE} //
            onValueChange={() => setIsByTitle(!isByTitle)}
            value={isByTitle}
            style={{alignSelf: 'center'}}
          />
        )}
      </View>
      {isSearching && (
        <SearchBox
          handleSearch={value => setSearchString(value)}
          placeholder={placeholder}
        />
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

export default ListingScreen;
