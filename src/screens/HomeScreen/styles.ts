import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.SPACE_CADET,
    },
    padding: {
      padding: 20,
    },
    loader: {
      height: 200,
      width: 200,
      position: 'absolute',
      left: windowWidth / 2 - 100,
      top: windowHeight / 2 - 100,
    },
  });

  export default styles;