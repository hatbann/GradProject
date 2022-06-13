import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import BookLists from '../components/BookLists';
import BookReports from '../components/BookReports';
import Calenders from '../components/Calendars';

const options = [
  { label: '책 목록', value: '1' },
  { label: '독서록', value: '2' },
  { label: '달력', value: '3' },
];

export default function LibraryBarDetail() {
  const [pagenum, setPageNum] = useState('1');

  function functionCombined(value) {
    setPageNum(value);
    print();
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>서재</Text>
      <SwitchSelector
        options={options}
        initial={0}
        selectedColor={'#ffffff'}
        buttonColor={'#4596ff'}
        onPress={(value) => setPageNum(value)}
        height={35}
        style={styles.button}
      />
      {pagenum === '1' && <BookLists></BookLists>}
      {pagenum === '2' && <BookReports></BookReports>}
      {pagenum === '3' && <Calenders></Calenders>}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    margin: 20,
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  underline: {
    borderWidth: 0.5,
  },
});
