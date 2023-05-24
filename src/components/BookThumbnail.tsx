import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../constants/Colors';
import Font from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import EasyImage from './EasyImage';
import {API_ENDPOINTS} from '../configs/bookApi';

type ThumbnailProps = {
  book: any;
  isHorizontal: boolean;
};

const BookThumbnail: React.FC<ThumbnailProps> = ({
  book,
  isHorizontal = true,
}: ThumbnailProps) => {
  const {key, title, cover_i, ratings_average, author_name} = book;
  const sizeParams = isHorizontal ? '-L.jpg' : '-M.jpg';
  const thumbnailUrl = cover_i
    ? `${API_ENDPOINTS.bookThumbnail}${cover_i}${sizeParams}`
    : null;
  const author = author_name ? author_name[0] : '';
  const navigation = useNavigation();

  //Functions
  const showBookDetails = () => {
    navigation.navigate(Screens.BOOK_DETAILS, {key: key});
  };

  return isHorizontal ? (
    <TouchableOpacity style={styles.container} onPress={showBookDetails}>
      <EasyImage style={styles.image(isHorizontal)} webImage={thumbnailUrl} />
      <Text numberOfLines={2} style={styles.title(isHorizontal)}>
        {title}
      </Text>
      <Text style={styles.author(isHorizontal)}>by {author} </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.verticalContainer}
      onPress={showBookDetails}>
      <EasyImage webImage={thumbnailUrl} style={styles.image(isHorizontal)} />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title(isHorizontal)}>
          {title}
        </Text>
        <Text style={styles.author(isHorizontal)}>by {author} </Text>
        {ratings_average && (
          <Text style={{color: Colors.WHITE}}>{ratings_average}★</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 280,
    margin: 5,
    borderRadius: 20,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    padding: 10,
  },
  verticalContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.PURPLE_NAVY,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  textContainer: {
    margin: 10,
    justifyContent: 'space-evenly',
    flex: 1,
  },
  image: isHorizontal => ({
    width: isHorizontal ? 100 : 50,
    height: isHorizontal ? 180 : 75,
    alignSelf: 'center',
    resizeMode: 'center',
    marginVertical: 5,
  }),
  title: isHorizontal => ({
    color: Colors.WHITE,
    fontSize: isHorizontal ? 18 : 16,
    fontFamily: Font.VERDANA,
    fontWeight: isHorizontal ? '500' : '400',
  }),
  author: isHorizontal => ({
    color: Colors.WHITE,
    fontFamily: Font.GEORGIA,
    fontSize: isHorizontal ? 14 : 12,
  }),
});

export default BookThumbnail;
