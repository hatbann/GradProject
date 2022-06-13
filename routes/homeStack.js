import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
//Stacks
import Home from '../screens/home';
import Mypage from '../screens/mypage';
import Library from '../screens/library';
import Gathering from '../screens/Gathering';

const Tab = createBottomTabNavigator();
const size = 25;

const icons = [
  {
    inActiveIcon: require('../assets/homeInActive.png'),
    ActiveIcon: require('../assets/homeActive.png'),
  },
  {
    inActiveIcon: require('../assets/libraryInActive.png'),
    ActiveIcon: require('../assets/libraryActive.png'),
  },
  {
    inActiveIcon: require('../assets/communityInActive.png'),
    ActiveIcon: require('../assets/communityActive.png'),
  },
  {
    inActiveIcon: require('../assets/myPageInActive.png'),
    ActiveIcon: require('../assets/myPageActive.png'),
  },
];

const Root = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons[0].ActiveIcon : icons[0].inActiveIcon}
              style={{
                width: size,
                height: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="서재"
        component={Library}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons[1].ActiveIcon : icons[1].inActiveIcon}
              style={{
                width: size,
                height: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="모임"
        component={Gathering}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons[2].ActiveIcon : icons[2].inActiveIcon}
              style={{
                width: size,
                height: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons[3].ActiveIcon : icons[3].inActiveIcon}
              style={{
                width: size,
                height: size,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function index() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
