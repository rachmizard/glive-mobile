import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screens';
import AppBarHeader from '../components/AppBarHeader';

const Stack = createStackNavigator();

const RootRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: props => <AppBarHeader {...props} />}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootRouter;
