import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {HomeScreen, SignInScreen, SignUpScreen, SplashScreen} from '../screens';
import AppBarHeader from '../components/AppBarHeader';

const Stack = createStackNavigator();

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
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
};

export default RootRouter;
