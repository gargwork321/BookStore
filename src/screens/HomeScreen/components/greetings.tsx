import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {palette, theme} from '../../../constants/Colors';
import Font from '../../../constants/Fonts';
import EasyImage from '../../../components/EasyImage';
import LocalImages from '../../../constants/LocalImages';
import Screens from '../../../constants/Screens';
import {useNavigation} from '@react-navigation/native';

type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({name}: GreetingProps) => {
  const navigation = useNavigation();
  //Function
  const showSearchScreen = () => {
    navigation.navigate(Screens.LISTING, {
      title: 'Search Books',
      isSearching: true,
    });
  };
  return (
    <View style={styles.greetingContainer}>
      <View>
        <Text style={styles.name}>Hi {name}!</Text>
        <Text style={styles.message}>Keep exploring</Text>
      </View>
      <TouchableOpacity style={styles.searchBox} onPress={showSearchScreen}>
        <EasyImage style={styles.image} localImage={LocalImages.search} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    flex: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  name: {
    fontFamily: Font.TREBUCHET_REGULAR,
    color: theme.fontColor.userName,
    fontSize: 25,
    marginBottom: 5,
  },
  message: {
    fontFamily: Font.TREBUCHET_REGULAR,
    fontSize: 30,
    color: palette.WHITE,
  },
  searchBox: {
    backgroundColor: palette.DEEP_SPACE_SPARKLE,
    padding: 20,
    borderRadius: 100,
    marginLeft: 40,
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
});
export default Greeting;
