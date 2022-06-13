import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export default function BorrowBooks() {
  return (
    <View style={{ marginTop: 50, marginLeft: 30 }}>
      <View style={styles.shelf}>
        <Image
          style={styles.bookImg}
          source={{
            uri: 'http://image.kyobobook.co.kr/images/book/large/143/l9791197377143.jpg',
          }}
        ></Image>
        <Image
          style={styles.bookImg}
          source={{
            uri: 'http://image.kyobobook.co.kr/images/book/large/001/l9791191824001.jpg',
          }}
        ></Image>
        <Image
          style={styles.bookImg}
          source={{
            uri: 'http://image.kyobobook.co.kr/images/book/large/729/l9791165343729.jpg',
          }}
        ></Image>
      </View>
      <View style={styles.shelf}>
        <Image
          style={styles.bookImg}
          source={{
            uri: 'http://image.kyobobook.co.kr/images/book/large/018/l9791190090018.jpg',
          }}
        ></Image>
        <Image
          style={styles.bookImg}
          source={{
            uri: 'http://image.kyobobook.co.kr/images/book/large/152/l9788954682152.jpg',
          }}
        ></Image>
        <Image style={styles.bookImg} source={{}}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shelf: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 35,
  },
  bookImg: {
    width: 65,
    height: 110,
    borderRadius: 5,
    marginRight: 25,
    flex: 1,
  },
});
