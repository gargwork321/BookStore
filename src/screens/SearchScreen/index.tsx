import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, SafeAreaView, Switch, Text, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import NavigationBar from './../../components/navigationBar';
import BookThumbnail from '../../components/BookThumbnail';
import {
  searchAuthors,
  searchBookByTitle,
  searchBooksByAuthors,
} from '../../configs/bookApi';
import SearchBox from '../../components/SearchBox';
import LocalImages from '../../constants/LocalImages';
import styles from './styles';
import {Strings} from '../../constants/Strings';

const SearchScreen: React.FC = ({route}) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isByTitle, setIsByTitle] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>('');
  let pageRef = useRef<number>(0);
  const {searchByAuthor, searchByTitle, placeholder} = Strings.searching;

  //Hooks
  useEffect(() => {
    setSearchedBooks([]);
    isByTitle ? searchBook(searchString) : searchBookByAuthor(searchString);
  }, [searchString]);

  useEffect(() => {
    if (loadMore) {
      pageRef.current = pageRef.current + 10;
      isByTitle ? searchBook(searchString) : searchBookByAuthor(searchString);
    }
  }, [loadMore]);

  useEffect(() => {
    setSearchedBooks([]);
    isByTitle ? searchBook(searchString) : searchBookByAuthor(searchString);
  }, [isByTitle]);

  //Functions
  const searchBook = async text => {
    if (text === '') return;
    if (error) {
      setError(false);
    }
    if (!isLoading && !loadMore) {
      setIsLoading(true);
    }
    const result = await searchBookByTitle(text, 10);
    const books = result?.docs;
    if (books) {
      loadMore
        ? setSearchedBooks(prevState => [...prevState, ...books])
        : setSearchedBooks(books);
    } else {
      setError(true);
    }
    loadMore ? setLoadMore(false) : setIsLoading(false);
  };

  const searchBookByAuthor = async text => {
    if (text === '') return;
    if (error) {
      setError(false);
    }
    if (!isLoading && !loadMore) {
      setIsLoading(true);
    }
    const result = await searchAuthors(text, 10);
    const authors = result?.docs;
    console.log('seached author', authors);
    for (let author of authors) {
      const key = author.key;
      const res = searchBooksByAuthors(key, 10).then(data => {
        console.log('book', data);
        const books = data.docs;
        setSearchedBooks(prevState => [...prevState, ...books]);
      });
    }
    loadMore ? setLoadMore(false) : setIsLoading(false);
  };

  const showMore = () => {
    if (searchedBooks?.length > 9) {
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
      {isLoading && (
        <Image style={styles.loader} source={LocalImages.loading} />
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {isByTitle ? searchByTitle : searchByAuthor}
        </Text>
        <Switch
          trackColor={{true: Colors.DEEP_SPACE_SPARKLE}}
          ios_backgroundColor={Colors.FRENCH_SKY_BLUE} //
          onValueChange={() => setIsByTitle(!isByTitle)}
          value={isByTitle}
          style={{alignSelf: 'center'}}
        />
      </View>
      <SearchBox
        handleSearch={value => setSearchString(value)}
        placeholder={placeholder}
      />
      <FlatList
        data={searchedBooks}
        extraData={searchedBooks}
        showsHorizontalScrollIndicator={false}
        renderItem={item => renderItem(item)}
        style={styles.padding}
        onEndReachedThreshold={0.01}
        onEndReached={showMore}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
