import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  Dimensions,
} from 'react-native';

//Components
import MypageBarDetail from '../components/MypageBarDetail';

const screenHeight = Dimensions.get('screen').height;
export default function Profile() {
  return (
    <View style={{ height: screenHeight }}>
      <ScrollView>
        <MypageBarDetail />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 400,
  },
});
