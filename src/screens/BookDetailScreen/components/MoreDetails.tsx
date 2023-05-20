import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {palette} from '../../../constants/Colors';
import Font from '../../../constants/Fonts';

type BookProps = {
  book: {};
};

const MoreDetails: React.FC<BookProps> = ({book}: BookProps) => {
  const customData = require('../../../helper/dummyData/books.json');
  const dummyBook = customData[0];
  const [isOverviewSelected, setOverviewSelected] = useState<boolean>(true);

  //Functions
  const onTabPressed = () => {
    setOverviewSelected(!isOverviewSelected);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity
            style={styles.tabBox(isOverviewSelected)}
            onPress={onTabPressed}>
            <Text style={styles.tabText(!isOverviewSelected)}>Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabBox(!isOverviewSelected)}
            onPress={onTabPressed}>
            <Text style={styles.tabText(isOverviewSelected)}>Details</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.detailtext}>{dummyBook.description}</Text>
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
});
export default MoreDetails;
