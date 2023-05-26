import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import NavigationBar from '../../components/navigationBar';
import MainDetails from './components/MainDetails/MainDeatils';
import MoreDetails from './components/MoreDetails/MoreDetails';
import {fetchAuthorDetails, fetchBookDetails} from '../../network/network';
import styles from './styles';

const BookDetailScreen: React.FC = ({route}) => {
  const bookKey = route.params.key;
  const [bookDetails, setBookDetails] = useState({});
  const [authorDetails, setAuthorDetails] = useState({});

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
    const authorKey = bookDetails?.authors[0]?.author.key || '';
    const _ = fetchAuthorDetails(`${authorKey}`).then(res => {
      setAuthorDetails(res);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      {authorDetails && (
        <>
          <MainDetails book={bookDetails} author={authorDetails} />
          <MoreDetails book={bookDetails} author={authorDetails} />
        </>
      )}
    </SafeAreaView>
  );
};

export default BookDetailScreen;
