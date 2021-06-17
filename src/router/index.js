import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashScreen } from '../screens';
import { AppBotomNavigation } from '../components';
import {
  ActivityStack,
  AuthStack,
  HomeStack,
  NotificationStack,
  PostStack,
  ProfileStack,
} from './Stacks';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ keyboardHidesTabBar: true }}
      tabBar={props => <AppBotomNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Activity" component={ActivityStack} />
      <Tab.Screen
        name="Post"
        component={PostStack}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen name="Notification" component={NotificationStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const RootRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      headerMode="none"
      screenOptions={{ ...TransitionPresets.FadeFromBottomAndroid }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Stack.Navigator>
  );
};

export default RootRouter;

const getHeaderTitle = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Activity':
      return 'Activity';
    case 'Notification':
      return 'Notification';
    case 'Profile':
      return 'Profile';
  }
};
