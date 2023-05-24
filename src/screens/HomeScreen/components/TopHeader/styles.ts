import { StyleSheet } from "react-native";
import { Colors } from "../../../../constants/Colors";

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
      color: Colors.WHITE,
    },
  });
  
 export default styles;  