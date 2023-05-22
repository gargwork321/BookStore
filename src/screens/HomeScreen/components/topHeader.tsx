import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../constants/Colors';
import LocalImages from '../../../constants/LocalImages';

const TopHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={LocalImages.menu} />
      <TouchableOpacity>
        <Image style={styles.image} source={LocalImages.reader} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: 45,
    height: 45,
  },
  leftMargin: {
    marginLeft: 10,
  },
  rightMargin: {
    marginRight: 20,
  },
  whiteColor: {
    color: colors.white,
  },
});

export default TopHeader;
