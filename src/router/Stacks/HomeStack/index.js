import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DirectMessageScreen, HomeScreen} from '../../../screens';
import {AppBarHeader} from '../../../components';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: props => <AppBarHeader {...props} />,
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="DirectMessage" component={DirectMessageScreen} />
  </Stack.Navigator>
);

export default HomeStack;
