import React from 'react';
import HomeScreen from './screen/HomeScreen';
import Profile from './screen/Profile';
import SearchScreen from './screen/SearchScreen';
import OrdersScreen from './screen/OrdersScreen';
import SupportScreen from './screen/SupportScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Ionicons = require('react-native-vector-icons/Ionicons').default;

// Define Tab Param List
type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Search: undefined;
  Orders: undefined;
  Support: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Profile':
      iconName = focused ? 'person' : 'person-outline';
      break;
    case 'Search':
      iconName = focused ? 'search' : 'search-outline';
      break;
    case 'Orders':
      iconName = focused ? 'cart' : 'cart-outline';
      break;
    case 'Support':
      iconName = focused
        ? 'chatbubble-ellipses'
        : 'chatbubble-ellipses-outline';
      break;
    default:
      iconName = 'help-circle-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{title: 'Orders'}}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{title: 'Support'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
