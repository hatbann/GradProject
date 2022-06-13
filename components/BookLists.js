import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function BookLists() {
  return (
    <View>
      <View style={styles.lists}>
        <View style={styles.list}>
          <Image
            source={{
              uri: 'http://www.readersnews.com/news/photo/201707/73990_32707_616.jpg',
            }}
            style={styles.bookImage}
          ></Image>
          <View style={styles.info}>
            <View style={styles.bookInfo}>
              <Text style={styles.title}>미정</Text>
              <Text>저자</Text>
            </View>
            <View style={styles.userBookInfo}>
              <Text>읽은날짜/</Text>
              <Text>별점/</Text>
              <Text>추비추</Text>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Image
            source={{
              uri: 'https://img.daily.co.kr/@files/www.daily.co.kr/content_watermark/life/2017/20170504/859b9ec69dcef60de3606fd9eab7e29e.jpg',
            }}
            style={styles.bookImage}
          ></Image>
          <View style={styles.info}>
            <View style={styles.bookInfo}>
              <Text style={styles.title}>미정</Text>
              <Text>저자</Text>
            </View>
            <View style={styles.userBookInfo}>
              <Text>읽은날짜/</Text>
              <Text>별점/</Text>
              <Text>추비추</Text>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Image
            source={{
              uri: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0418/IE002632888_STD.jpg',
            }}
            style={styles.bookImage}
          ></Image>
          <View style={styles.info}>
            <View style={styles.bookInfo}>
              <Text style={styles.title}>미정</Text>
              <Text>저자</Text>
            </View>
            <View style={styles.userBookInfo}>
              <Text>읽은날짜/</Text>
              <Text>별점/</Text>
              <Text>추비추</Text>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Image
            source={{
              uri: 'http://image.kyobobook.co.kr/images/book/xlarge/844/x9791158930844.jpg',
            }}
            style={styles.bookImage}
          ></Image>
          <View style={styles.info}>
            <View style={styles.bookInfo}>
              <Text style={styles.title}>미정</Text>
              <Text>저자</Text>
            </View>
            <View style={styles.userBookInfo}>
              <Text>읽은날짜/</Text>
              <Text>별점/</Text>
              <Text>추비추</Text>
            </View>
          </View>
        </View>
        <View style={styles.list}>
          <Image
            source={{
              uri: 'https://newsimg.sedaily.com/2019/10/30/1VPQ0XY4RJ_1.jpg',
            }}
            style={styles.bookImage}
          ></Image>
          <View style={styles.info}>
            <View style={styles.bookInfo}>
              <Text style={styles.title}>미정</Text>
              <Text>저자</Text>
            </View>
            <View style={styles.userBookInfo}>
              <Text>읽은날짜/</Text>
              <Text>별점/</Text>
              <Text>추비추</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lists: {
    flex: 0.25,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  bookImage: {
    width: 90,
    height: 120,
    marginRight: 20,
  },
  info: {
    marginTop: 15,
  },
  bookInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginRight: 5,
  },
  userBookInfo: {
    flexDirection: 'row',
  },
});
