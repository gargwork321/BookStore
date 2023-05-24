import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Strings} from '../../../../constants/Strings';

type BookProps = {
  book: {};
  author: {};
};

const MoreDetails: React.FC<BookProps> = ({book, author}: BookProps) => {
  const [isOverviewSelected, setOverviewSelected] = useState<boolean>(true);
  const bio = author?.bio?.value || author?.bio;
  const description = book?.description?.value || book?.description;
  const {tab1, tab2} = Strings.bookDetails;
  //Functions
  const onTabPressed = () => {
    setOverviewSelected(!isOverviewSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBarContainer}>
        <TouchableOpacity
          style={styles.tabBox(!isOverviewSelected)}
          onPress={onTabPressed}>
          <Text style={styles.tabText(isOverviewSelected)}>{tab1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabBox(isOverviewSelected)}
          onPress={onTabPressed}>
          <Text style={styles.tabText(!isOverviewSelected)}>{tab2}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.padding}>
          <Text style={styles.title}>
            {isOverviewSelected ? book?.title : author?.name}
          </Text>
          <Text style={styles.detailtext}>
            {isOverviewSelected ? description : bio}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MoreDetails;
