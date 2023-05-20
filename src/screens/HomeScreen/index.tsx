import React from 'react';
import TopHeader from './components/topHeader';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {theme} from '../../constants/Colors';
import Greeting from './components/greetings';
import SearchBox from '../../components/SearchBox';
import ShowCase from '../../components/Showcase';

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TopHeader />
        <Greeting name="Vivek" />
        <SearchBox placeholder="Search your books" />
        <ShowCase title="Trending now" data={[]} isHorizontal={true} />
        <ShowCase title="My favourite" data={[]} isHorizontal={false} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  padding: {
    padding: 20,
  },
});

export default HomeScreen;
