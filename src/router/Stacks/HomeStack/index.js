import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ChatScreen, DirectMessageScreen, HomeScreen} from '../../../screens';
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
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

export default HomeStack;
