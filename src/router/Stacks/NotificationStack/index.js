import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NotificationScreen} from '../../../screens';
import {AppBarHeader} from '../../../components';

const Stack = createStackNavigator();

const NotificationStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: props => <AppBarHeader {...props} />,
    }}>
    <Stack.Screen name="Notification" component={NotificationScreen} />
  </Stack.Navigator>
);

export default NotificationStack;
