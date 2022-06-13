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

import MyInfo from './MyInfo';
import FriendsList from './FriendsList';
import BorrowBooks from './BorrowBooks';

const options = [
  { label: '내 정보', value: '1' },
  { label: '친구목록', value: '2' },
  { label: '빌려준 책 목록', value: '3' },
];

export default function MypageBarDetail() {
  const [pagenum, setPageNum] = useState('1');

  function functionCombined(value) {
    setPageNum(value);
    print();
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>마이페이지</Text>
      <SwitchSelector
        options={options}
        initial={0}
        selectedColor={'#ffffff'}
        buttonColor={'#4596ff'}
        onPress={(value) => setPageNum(value)}
        height={35}
        style={styles.button}
      />
      {pagenum === '1' && <MyInfo></MyInfo>}
      {pagenum === '2' && <FriendsList></FriendsList>}
      {pagenum === '3' && <BorrowBooks></BorrowBooks>}
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
  },
  underline: {
    borderWidth: 0.5,
  },
});
