import React, {useState} from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';
import LocalImages from '../constants/LocalImages';

type ImageProps = {
  localImage?: any;
  webImage?: string | null;
  style?: StyleProp<ImageStyle> | undefined;
};

const EasyImage: React.FC<ImageProps> = ({webImage, style, localImage}) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <Image
      style={style || styles.default}
      source={loading ? LocalImages.downloading : localImage || {uri: webImage}}
      onLoadEnd={() => setLoading(false)}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
});

export default EasyImage;
