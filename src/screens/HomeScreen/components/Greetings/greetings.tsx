import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import EasyImage from '../../../../components/EasyImage';
import LocalImages from '../../../../constants/LocalImages';
import Screens from '../../../../constants/Screens';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Strings} from '../../../../constants/Strings';

type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({name}: GreetingProps) => {
  const {greet, exploring} = Strings.greeting;
  const navigation = useNavigation();
  //Function
  const showSearchScreen = () => {
    navigation.navigate(Screens.SEARCHING);
  };

  return (
    <View style={styles.greetingContainer}>
      <View>
        <Text style={styles.name}>
          {greet}
          {name}!
        </Text>
        <Text style={styles.message}>{exploring}</Text>
      </View>
      <TouchableOpacity style={styles.searchBox} onPress={showSearchScreen}>
        <EasyImage style={styles.image} localImage={LocalImages.search} />
      </TouchableOpacity>
    </View>
  );
};

export default Greeting;
