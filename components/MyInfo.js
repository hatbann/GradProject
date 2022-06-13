import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts';

class StackedBarChartExample extends React.PureComponent {
  render() {
    const data = [
      {
        apples: 3,
        bananas: 2,
        cherries: 1,
      },
    ];

    const colors = ['#fff7a5', '#b2e6ff', '#ffc6f0'];
    const keys = ['apples', 'bananas', 'cherries'];

    return (
      <StackedBarChart
        style={{ height: 17 }}
        keys={keys}
        colors={colors}
        data={data}
        showGrid={false}
        contentInset={{ top: 30, bottom: 30 }}
        horizontal={true}
      />
    );
  }
}

export default function BorrowBooks() {
  return (
    <View>
      <View style={styles.myinfo}>
        <Image
          source={require('../assets/img1.png')}
          style={styles.character}
        ></Image>
        <View style={styles.infoDetail}>
          <View style={styles.level}>
            <Text style={styles.userName}>이채연</Text>
            <Text>(은방울)</Text>
          </View>
          <StackedBarChartExample></StackedBarChartExample>
        </View>
      </View>
      <View style={styles.setting}>
        <View style={styles.settingObj}>
          <Image
            source={require('../assets/user.png')}
            style={styles.settingImg}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>프로필</Text>
        </View>
        <View style={styles.settingObj}>
          <Image
            source={require('../assets/crops.png')}
            style={styles.settingImg}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>내 식물</Text>
        </View>
        <View style={styles.settingObj}>
          <Image
            source={require('../assets/location.png')}
            style={styles.settingImg}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>동네 설정</Text>
        </View>
        <View style={styles.settingObj}>
          <Image
            source={require('../assets/paint.png')}
            style={styles.settingImg}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>테마 설정</Text>
        </View>
        <View style={styles.settingObj}>
          <Image
            source={require('../assets/unlock.png')}
            style={styles.settingImg}
          ></Image>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>로그아웃</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 15,
  },
  character: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
  },
  infoDetail: {
    marginLeft: 15,
    width: '60%',
  },
  level: {
    fontSize: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 5,
  },
  percentage: {
    height: 10,
  },
  setting: {
    margin: 30,
    marginTop: 40,
  },
  settingObj: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  settingImg: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
});
