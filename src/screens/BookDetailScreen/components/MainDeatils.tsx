import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {palette} from '../../../constants/Colors';
import Font from '../../../constants/Fonts';
import {API_ENDPOINTS} from '../../../configs/bookApi';
import EasyImage from '../../../components/EasyImage';

type BookProps = {
  book: {};
  author: {};
};

const MainDetails: React.FC<BookProps> = ({book, author}: BookProps) => {
  const {
    title = '',
    covers,
    first_publish_date,
    subject_places,
    subjects,
  } = book;
  const thumbnailUrl = covers
    ? `${API_ENDPOINTS.bookThumbnail}${covers[0]}-L.jpg`
    : null;
  const origin = subject_places ? subject_places[0] : '';
  const sub = subjects ? subjects.slice(0, 2).join(', ') : '';
  return (
    <View style={styles.container}>
      <EasyImage webImage={thumbnailUrl} style={styles.bookImage} />
      <View style={styles.blankBox}></View>
      <View style={styles.textbox}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subText}>Author: {author.name}</Text>
        <Text style={styles.subText}>Released: {first_publish_date}</Text>
        <Text style={styles.subText}>Origin: {origin}</Text>
        <Text style={styles.subText}>Subject: {sub}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: palette.PURPLE_NAVY,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 20,
    marginTop: 80,
  },
  bookImage: {
    width: 110,
    height: 160,
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  blankBox: {
    width: 110,
    height: 140,
  },
  textbox: {
    margin: 12,
    justifyContent: 'space-evenly',
    flex: 1,
  },
  title: {
    color: palette.WHITE,
    fontSize: 18,
    fontFamily: Font.VERDANA,
    fontWeight: '500',
    flexWrap: 'wrap',
  },
  subText: {
    color: palette.WHITE,
    fontFamily: Font.GEORGIA,
    fontSize: 12,
  },
});
export default MainDetails;
