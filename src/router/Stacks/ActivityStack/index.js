import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ActivityScreen,
  DivisionScreen,
  GameRoomDetailScreen,
} from '../../../screens';
import {AppBarHeader} from '../../../components';

const Stack = createStackNavigator();

const ActivityStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: props => <AppBarHeader {...props} />,
    }}>
    <Stack.Screen name="Activity" component={ActivityScreen} />
    <Stack.Screen name="GameRoomDetail" component={GameRoomDetailScreen} />
    <Stack.Screen name="Division" component={DivisionScreen} />
  </Stack.Navigator>
);

export default ActivityStack;
