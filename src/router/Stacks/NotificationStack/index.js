import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FollowerRequestScreen, NotificationScreen} from '../../../screens';
import {AppBarHeader} from '../../../components';

const Stack = createStackNavigator();

const NotificationStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: props => <AppBarHeader {...props} />,
    }}>
    <Stack.Screen name="Notification" component={NotificationScreen} />
    <Stack.Screen
      name="FollowerRequest"
      component={FollowerRequestScreen}
      options={{headerTitle: 'Friend Requests'}}
    />
  </Stack.Navigator>
);

export default NotificationStack;
