import { StyleSheet } from "react-native";
import { Colors } from "../../../../constants/Colors";
import Font from "../../../../constants/Fonts";

//Styles
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: Colors.PURPLE_NAVY,
      paddingHorizontal: 10,
      borderRadius: 10,
      margin: 20,
      marginTop: 80,
    },
    bookImage: {
      width: 110,
      height: 160,
      position: 'absolute',
      bottom: 20,
      left: 10,
    },
    blankBox: {
      width: 110,
      height: 140,
    },
    textbox: {
      margin: 12,
      justifyContent: 'space-evenly',
      flex: 1,
    },
    title: {
      color: Colors.WHITE,
      fontSize: 18,
      fontFamily: Font.VERDANA,
      fontWeight: '500',
      flexWrap: 'wrap',
    },
    subText: {
      color: Colors.WHITE,
      fontFamily: Font.GEORGIA,
      fontSize: 12,
    },
  });

  export default styles;