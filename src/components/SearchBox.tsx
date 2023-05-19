import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {palette, theme} from '../constants/Colors';

type SearchProps = {
  placeholder: String;
};
const SearchBox: React.FC<SearchProps> = ({placeholder}: SearchProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={palette.WHITE}
        style={styles.searchBar}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Image
          style={styles.image}
          source={require('../assets/images/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  searchBar: {
    backgroundColor: palette.PURPLE_NAVY,
    height: 60,
    borderRadius: 10,
    color: palette.WHITE,
    fontSize: 18,
    padding: 15,
  },
  searchButton: {
    position: 'absolute',
    right: 25,
    top: 22.5,
    borderRadius: 10,
    backgroundColor: palette.PIXIE_POWDER,
    height: 45,
    width: 45,
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
export default SearchBox;
