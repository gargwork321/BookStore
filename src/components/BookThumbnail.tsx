import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {palette} from '../constants/Colors';

type ThumbnailProps = {
  title: string;
  author: string;
};

const BookThumbnail: React.FC<ThumbnailProps> = ({
  title,
  author,
}: ThumbnailProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/book.png')}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>by {author} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    margin: 5,
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: palette.WHITE,
    borderWidth: 1,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  title: {
    color: palette.WHITE,
    fontSize: 24,
    fontWeight: '500',
  },
  author: {
    color: palette.WHITE,
    fontSize: 16,
  },
});
export default BookThumbnail;
