import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import {
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-web';
import RecommandBooks from '../components/RecommandBooks';
import TodayBooks from '../components/TodayBooks';

export default function Home({ navigation }) {
  const profilePressHandler = () => {
    navigation.navigate('profile');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.intro}>
          <Text style={styles.titleText}>프로추리러, 선영님의 세계</Text>
          <Image
            source={require('../assets/img1.png')}
            style={styles.character}
          />
          <Button title="My Plant" onPress={profilePressHandler}></Button>
        </View>
        <View>
          <Text style={[styles.titleText, { marginTop: 80 }]}>
            추리를 좋아하는{'\n'}선영님을 위한 추천도서
          </Text>
          <RecommandBooks />
          <Text style={[styles.titleText, { marginTop: 80 }]}>오늘의 도서</Text>
          <TodayBooks />
        </View>
      </ScrollView>
    </View>
  );
}

const Pages = [
  {
    num: 1,
    color: '#86E3CE',
  },
  {
    num: 2,
    color: '#D0E6A5',
  },
  {
    num: 3,
    color: '#FFDD94',
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'f4f2ed' },
  intro: { marginTop: 100, alignItems: 'center' },
  character: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 25,
  },
  text: { textAlign: 'center', fontSize: 16 },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
