import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {palette, theme} from '../../constants/Colors';
import NavigationBar from './../../components/navigationBar';
import BookThumbnail from '../../components/BookThumbnail';
import Font from '../../constants/Fonts';

const ListingScreen: React.FC = ({route}) => {
  const listTitle = route.params.title;
  const customData = require('../../helper/dummyData/books.json');
  const renderItem = ({item}) => (
    <BookThumbnail
      title={item.title}
      author={item.author}
      isHorizontal={false}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <Image
        style={styles.image}
        source={require('../../assets/images/bookStack.png')}
      />
      <Text style={styles.title}>{listTitle}</Text>
      <FlatList
        data={customData}
        showsHorizontalScrollIndicator={false}
        renderItem={item => renderItem(item)}
        style={styles.padding}
      />
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
  title: {
    fontSize: 25,
    color: palette.WHITE,
    fontFamily: Font.VERDANA,
    fontWeight: '500',
    margin: 20,
  },
  image: {
    height: 200,
    width: 200,
    position: 'absolute',
    right: 10,
    top: 50,
    opacity: 0.2,
  },
});

export default ListingScreen;
