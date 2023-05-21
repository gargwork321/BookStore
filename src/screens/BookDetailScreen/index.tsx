import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {theme} from '../../constants/Colors';
import NavigationBar from '../../components/navigationBar';
import MainDetails from './components/MainDeatils';
import MoreDetails from './components/MoreDetails';
import {fetchBookDetails} from '../../configs/bookApi';

const BookDetailScreen: React.FC = ({route}) => {
  const bookKey = route.params.key;
  const [bookDetails, setBookDetails] = useState({});
  const [authorDetails, setAurthorDetails] = useState({});

  //Hooks
  useEffect(() => {
    getBookDetails();
  }, []);

  useEffect(() => {
    getAuthorDetails();
  }, [bookDetails]);

  //Functions
  const getBookDetails = async () => {
    const _ = await fetchBookDetails(`${bookKey}`).then(data => {
      setBookDetails(data);
    });
  };

  const getAuthorDetails = async () => {
    if (!Object.entries(bookDetails).length) {
      return;
    }
    const authorKey =
      bookDetails.authors && bookDetails.authors.length > 0
        ? bookDetails.authors[0].author.key
        : '';
    const _ = fetchBookDetails(`${authorKey}`).then(res => {
      setAurthorDetails(res);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      {authorDetails ? (
        <>
          <MainDetails book={bookDetails} author={authorDetails} />
          <MoreDetails book={bookDetails} author={authorDetails} />
        </>
      ) : (
        <></>
      )}
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
