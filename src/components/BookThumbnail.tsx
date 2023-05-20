import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {palette} from '../constants/Colors';
import Font from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';

type ThumbnailProps = {
  title: string;
  author: string;
  isHorizontal: boolean;
};

const BookThumbnail: React.FC<ThumbnailProps> = ({
  title,
  author,
  isHorizontal = true,
}: ThumbnailProps) => {
  const navigation = useNavigation();
  const showBookDetails = () => {
    navigation.navigate(Screens.BOOK_DETAILS);
  };

  return isHorizontal ? (
    <TouchableOpacity style={styles.container} onPress={showBookDetails}>
      <Image
        style={styles.image(isHorizontal)}
        source={require('../assets/images/book.png')}
      />
      <Text style={styles.title(isHorizontal)}>{title}</Text>
      <Text style={styles.author(isHorizontal)}>by {author} </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.verticalContainer}
      onPress={showBookDetails}>
      <Image
        style={styles.image(isHorizontal)}
        resizeMode="center"
        source={require('../assets/images/book.png')}
      />
      <View style={{margin: 10, justifyContent: 'space-evenly'}}>
        <Text style={styles.title(isHorizontal)}>{title}</Text>
        <Text style={styles.author(isHorizontal)}>by {author}</Text>
        <Text style={{color: palette.WHITE}}>★★★★★</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 150,
    // height: 200,
    margin: 5,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: palette.WHITE,
    borderWidth: 1,
    padding: 20,
  },
  verticalContainer: {
    flexDirection: 'row',
    backgroundColor: palette.PURPLE_NAVY,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  image: isHorizontal => ({
    width: isHorizontal ? 100 : 50,
    height: isHorizontal ? 100 : 80,
    alignSelf: 'center',
  }),
  title: isHorizontal => ({
    color: palette.WHITE,
    fontSize: isHorizontal ? 20 : 16,
    fontFamily: Font.VERDANA,
  }),
  author: isHorizontal => ({
    color: palette.WHITE,
    fontFamily: Font.GEORGIA,
    fontSize: isHorizontal ? 14 : 12,
  }),
});
export default BookThumbnail;
