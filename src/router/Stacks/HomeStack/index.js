import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {DirectMessageScreen, HomeScreen} from '../../../screens';
import {AppBarHeader} from '../../../components';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: props => <AppBarHeader {...props} />,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="DirectMessage"
      component={DirectMessageScreen}
      options={{headerTitle: 'Direct Message'}}
    />
  </Stack.Navigator>
);

export default HomeStack;
