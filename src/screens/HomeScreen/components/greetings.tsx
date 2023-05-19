import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {palette, theme} from '../../../constants/Colors';
import Font from '../../../constants/Fonts';

type GreetingProps = {
  name: string;
};

const Greeting: React.FC<GreetingProps> = ({name}: GreetingProps) => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.name}>Hi {name}!</Text>
      <Text style={styles.message}>Keep exploring</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    flex: 0,
    paddingHorizontal: 20,
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
});
export default Greeting;
