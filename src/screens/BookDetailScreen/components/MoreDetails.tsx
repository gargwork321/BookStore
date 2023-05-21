import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {palette} from '../../../constants/Colors';
import Font from '../../../constants/Fonts';

type BookProps = {
  book: {};
  author: {};
};

const MoreDetails: React.FC<BookProps> = ({book, author}: BookProps) => {
  const [isOverviewSelected, setOverviewSelected] = useState<boolean>(true);
  const bio = author?.bio?.value || author?.bio;
  const description = book?.description?.value || book?.description;

  //Functions
  const onTabPressed = () => {
    setOverviewSelected(!isOverviewSelected);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity
            style={styles.tabBox(!isOverviewSelected)}
            onPress={onTabPressed}>
            <Text style={styles.tabText(isOverviewSelected)}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabBox(isOverviewSelected)}
            onPress={onTabPressed}>
            <Text style={styles.tabText(!isOverviewSelected)}>Author</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={{paddingTop: 20}}>
            <Text style={styles.title}>
              {isOverviewSelected ? book?.title : author?.name}
            </Text>
            <Text style={styles.detailtext}>
              {isOverviewSelected ? description : bio}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  tabBarContainer: {
    flexDirection: 'row',
  },
  tabBox: (flag: boolean) => ({
    marginRight: 15,
    borderBottomWidth: 2,
    borderBottomColor: flag ? palette.PHILLIPPINE_GRAY : palette.WHITE,
    height: 22,
  }),
  tabText: (flag: boolean) => ({
    fontWeight: '500',
    fontSize: 14,
    color: flag ? palette.WHITE : palette.PHILLIPPINE_GRAY,
    fontFamily: Font.VERDANA,
  }),
  detailtext: {
    color: palette.WHITE,
    paddingTop: 30,
    fontFamily: Font.GEORGIA,
  },
  title: {
    color: palette.WHITE,
    fontSize: 20,
    fontWeight: '600',
  },
});
export default MoreDetails;
