import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

export default function FriendsList() {
  return (
    <View style={styles.friendList}>
      <View style={styles.friend}>
        <View style={styles.friendProfile}>
          <Image
            source={require('../assets/profile12.png')}
            style={styles.profileImg}
          ></Image>
          <Text>조선영</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            style={styles.bookImg}
            source={{
              uri: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0418/IE002632888_STD.jpg',
            }}
          ></Image>
          <Image
            style={styles.bookImg}
            source={{
              uri: 'https://newsimg.sedaily.com/2019/10/30/1VPQ0XY4RJ_1.jpg',
            }}
          ></Image>
          <Image
            style={styles.bookImg}
            source={{
              uri: 'http://www.readersnews.com/news/photo/201707/73990_32707_616.jpg',
            }}
          ></Image>
        </ScrollView>
      </View>
      <View style={styles.friend}>
        <View style={styles.friendProfile}>
          <Image
            source={require('../assets/profile11.jpg')}
            style={styles.profileImg}
          ></Image>
          <Text>조혜빈</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            style={styles.bookImg}
            source={{
              uri: 'http://image.kyobobook.co.kr/images/book/large/143/l9791197377143.jpg',
            }}
          ></Image>
          <Image
            style={styles.bookImg}
            source={{
              uri: 'http://image.kyobobook.co.kr/images/book/large/033/l9788937461033.jpg',
            }}
          ></Image>
          <Image
            style={styles.bookImg}
            source={{
              uri: 'http://image.kyobobook.co.kr/images/book/large/001/l9791191824001.jpg',
            }}
          ></Image>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  friendList: {
    marginTop: 45,
    marginLeft: 10,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  friendProfile: {
    alignItems: 'center',
    marginRight: 30,
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    marginBottom: 15,
  },
  bookImg: {
    width: 75,
    height: 100,
    borderRadius: 5,
    marginRight: 25,
  },
});
