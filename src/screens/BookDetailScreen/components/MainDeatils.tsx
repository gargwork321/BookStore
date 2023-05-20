import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {palette} from '../../../constants/Colors';
import Font from '../../../constants/Fonts';

type BookProps = {
  book: {};
};

const MainDetails: React.FC<BookProps> = ({book}: BookProps) => {
  const customData = require('../../../helper/dummyData/books.json');
  const dummyBook = customData[0];
  return (
    <View style={styles.container}>
      <Image
        style={styles.bookImage}
        resizeMode="cover"
        source={require('../../../assets/images/gita.png')}
      />
      <View style={styles.blankBox}></View>
      <View style={styles.textbox}>
        <Text style={styles.title}>{dummyBook.title}</Text>
        <Text style={styles.author}>Author: {dummyBook.author}</Text>
        <Text style={styles.author}>Released: 12 May, 2002 </Text>
        <Text style={{color: palette.WHITE}}>5.0 ★★★★★</Text>
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
  image: {
    width: 40,
    height: 40,
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
    margin: 10,
    justifyContent: 'space-evenly',
  },
  title: {
    color: palette.WHITE,
    fontSize: 16,
    fontFamily: Font.VERDANA,
    fontWeight: '500',
  },
  author: {
    color: palette.WHITE,
    fontFamily: Font.GEORGIA,
    fontSize: 12,
  },
});
export default MainDetails;
