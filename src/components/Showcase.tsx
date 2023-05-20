import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {palette} from '../constants/Colors';
import BookThumbnail from './BookThumbnail';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';

type ShowcaseProps = {
  title: string;
  data: [];
  isHorizontal: boolean;
};
const ShowCase: React.FC<ShowcaseProps> = ({
  title,
  data,
  isHorizontal = true,
}: ShowcaseProps) => {
  const customData = require('../helper/dummyData/books.json');
  const navigation = useNavigation();
  const showMoreBooks = () => {
    navigation.navigate(Screens.LISTING, {title: title});
  };
  const renderItem = ({item}) => (
    <BookThumbnail
      title={item.title}
      author={item.author}
      isHorizontal={isHorizontal}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={{color: palette.WHITE, fontSize: 20, fontWeight: '600'}}>
          {title}
        </Text>
        <Pressable style={{alignSelf: 'center'}} onPress={showMoreBooks}>
          <Text style={{color: palette.WHITE}}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        data={customData}
        showsHorizontalScrollIndicator={false}
        renderItem={item => renderItem(item)}
        horizontal={isHorizontal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerSection: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
});
export default ShowCase;
