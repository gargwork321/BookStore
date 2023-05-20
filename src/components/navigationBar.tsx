import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const NavigationBar: React.FC = () => {
  const navigation = useNavigation();
  //Functions
  const backToHome = () => {
    navigation.goBack();
  };

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Pressable onPress={backToHome}>
        <Image
          style={styles.image}
          source={require('../assets/images/back.png')}
        />
      </Pressable>
      <Pressable>
        <Image
          style={styles.image}
          source={require('../assets/images/more.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
});
export default NavigationBar;
