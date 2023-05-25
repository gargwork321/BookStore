import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import Font from "../../constants/Fonts";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SPACE_CADET,
  },
  padding: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: Colors.WHITE,
    fontFamily: Font.VERDANA,
    fontWeight: '500',
    margin: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  bookStack: {
    height: 200,
    width: 200,
    position: 'absolute',
    right: 10,
    top: 50,
    opacity: 0.2,
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