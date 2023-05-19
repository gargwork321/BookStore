import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {palette} from '../constants/Colors';
import BookThumbnail from './BookThumbnail';

type ShowcaseProps = {
  title: string;
  data: [];
  isHorizontal: boolean;
};
const ShowCase: React.FC<ShowcaseProps> = ({
  title,
  datt,
  isHorizontal = true,
}: ShowcaseProps) => {
  const customData = require('../helper/dummyData/books.json');
  const renderItem = ({item}) => (
    <BookThumbnail title={item.title} author={item.author} />
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{color: palette.WHITE, fontSize: 20, fontWeight: '600'}}>
          {title}
        </Text>
        <Pressable style={{alignSelf: 'center'}}>
          <Text style={{color: palette.WHITE}}>See all</Text>
        </Pressable>
      </View>
      <FlatList
        data={customData}
        showsHorizontalScrollIndicator={false}
        renderItem={item => renderItem(item)}
        horizontal={isHorizontal}
        style={{paddingHorizontal: 15}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default ShowCase;
