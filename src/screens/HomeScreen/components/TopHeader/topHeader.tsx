import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LocalImages from '../../../../constants/LocalImages';
import styles from './styles';

const TopHeader: React.FC = () => {
  const {menu, reader} = LocalImages;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={menu} />
      <TouchableOpacity>
        <Image style={styles.image} source={reader} />
      </TouchableOpacity>
    </View>
  );
};

export default TopHeader;
