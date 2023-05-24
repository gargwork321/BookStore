import { StyleSheet } from "react-native";
import Font from "../../../../constants/Fonts";
import { Colors } from "../../../../constants/Colors";

const styles = StyleSheet.create({
    greetingContainer: {
      flex: 0,
      paddingHorizontal: 20,
      flexDirection: 'row',
    },
    name: {
      fontFamily: Font.GEORGIA,
      color: Colors.DARK_SKY_BLUE,
      fontSize: 20,
      marginBottom: 5,
    },
    message: {
      fontFamily: Font.GEORGIA,
      fontSize: 28,
      color: Colors.WHITE,
    },
    searchBox: {
      backgroundColor: Colors.DARK_SKY_BLUE,
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

  export default styles;