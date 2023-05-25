import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Colors';
import BookThumbnail from './BookThumbnail';
import {useNavigation} from '@react-navigation/native';
import Screens from '../constants/Screens';
import {Strings} from '../constants/Strings';

type ShowcaseProps = {
  title: string;
  data: [any];
  isHorizontal: boolean;
};

const ShowCase: React.FC<ShowcaseProps> = ({
  title,
  data,
  isHorizontal = true,
}: ShowcaseProps) => {
  const navigation = useNavigation();

  //Functions
  const showMoreBooks = () => {
    navigation.navigate(Screens.LISTING, {title: title});
  };
  const renderItem = ({item}) => (
    <BookThumbnail book={item} isHorizontal={isHorizontal} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={{alignSelf: 'center'}} onPress={showMoreBooks}>
          <Text style={{color: Colors.WHITE}}>{Strings.showcase.seeAll}</Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={item => renderItem(item)}
        horizontal={isHorizontal}
      />
    </View>
  );
};

//Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerSection: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default ShowCase;
