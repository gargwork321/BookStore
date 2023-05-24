import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LocalImages from '../constants/LocalImages';

const NavigationBar: React.FC = () => {
  const navigation = useNavigation();

  //Functions
  const backToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity onPress={backToHome}>
        <Image style={styles.image} source={LocalImages.back} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.image} source={LocalImages.more} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default NavigationBar;
