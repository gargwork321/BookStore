import { StyleSheet } from "react-native";
import { Colors } from "../../../../constants/Colors";
import Font from "../../../../constants/Fonts";

const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    tabBarContainer: {
      flexDirection: 'row',
    },
    padding: {
      paddingTop: 20,
    },
    detailtext: {
      color: Colors.WHITE,
      paddingTop: 30,
      fontFamily: Font.GEORGIA,
    },
    title: {
      color: Colors.WHITE,
      fontSize: 20,
      fontWeight: '600',
    },
    tabText: (flag: boolean) => ({
      fontWeight: '500',
      fontSize: 14,
      color: flag ? Colors.WHITE : Colors.PHILLIPPINE_GRAY,
      fontFamily: Font.VERDANA,
    }),
    tabBox: (flag: boolean) => ({
      marginRight: 15,
      borderBottomWidth: 2,
      borderBottomColor: flag ? Colors.PHILLIPPINE_GRAY : Colors.WHITE,
      height: 22,
    }),
  });

  export default styles;