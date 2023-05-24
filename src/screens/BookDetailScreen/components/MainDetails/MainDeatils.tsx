import React from 'react';
import {Text, View} from 'react-native';
import {API_ENDPOINTS} from '../../../../configs/bookApi';
import EasyImage from '../../../../components/EasyImage';
import {Strings} from '../../../../constants/Strings';
import styles from './styles';

type BookProps = {
  book: {};
  author: {};
};

const MainDetails: React.FC<BookProps> = ({book, author}: BookProps) => {
  const {
    title = '',
    covers,
    first_publish_date,
    subject_places,
    subjects,
  } = book;
  const thumbnailUrl = covers
    ? `${API_ENDPOINTS.bookThumbnail}${covers[0]}-L.jpg`
    : null;
  const bookOrigin = subject_places ? subject_places[0] : '';
  const sub = subjects ? subjects.slice(0, 2).join(', ') : '';
  const {authorr, release, origin, subject} = Strings.detailPage.heading;
  return (
    <View style={styles.container}>
      <EasyImage webImage={thumbnailUrl} style={styles.bookImage} />
      <View style={styles.blankBox}></View>
      <View style={styles.textbox}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subText}>
          {authorr}
          {author.name}
        </Text>
        <Text style={styles.subText}>
          {release}
          {first_publish_date}
        </Text>
        <Text style={styles.subText}>
          {origin}
          {bookOrigin}
        </Text>
        <Text style={styles.subText}>
          {subject}
          {sub}
        </Text>
      </View>
    </View>
  );
};

export default MainDetails;
