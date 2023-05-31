import React, {useCallback, memo} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../constants/Colors';
import {debounce} from 'lodash';

type SearchProps = {
  handleSearch: (value: string) => void;
  placeholder: string;
};
const SearchBox: React.FC<SearchProps> = ({
  placeholder,
  handleSearch,
}: SearchProps) => {
  //Functions
  const updatedText = value => {
    handleSearch(value);
  };

  const handleTextDebounce = useCallback(debounce(updatedText, 1200), []);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.PHILLIPPINE_GRAY}
        style={styles.searchBar}
        onChangeText={handleTextDebounce}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  searchBar: {
    backgroundColor: Colors.PURPLE_NAVY,
    height: 60,
    borderRadius: 10,
    color: Colors.WHITE,
    fontSize: 18,
    padding: 15,
  },
  clearButton: {
    position: 'absolute',
    right: 25,
    top: 22.5,
    borderRadius: 10,
    height: 45,
    width: 45,
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
});

export default memo(SearchBox);
