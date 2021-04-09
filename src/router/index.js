import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen,
  SplashScreen,
  SuccessSignUpScreen,
} from '../screens';
import AppBarHeader from '../components/AppBarHeader';
import {AppBotomNavigation} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'My profile';
  }
}

const MainScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <AppBotomNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const RootRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <AppBarHeader {...props} />,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
      initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerTitle: 'Sign In'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerTitle: 'Sign Up'}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUpScreen}
        options={{headerTitle: 'Sign Up'}}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Stack.Navigator>
  );
};

export default RootRouter;
