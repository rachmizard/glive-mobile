import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileEditScreen, ProfileScreen} from '../../../screens';
import {AppBarHeader} from '../../../components';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: props => <AppBarHeader {...props} />,
    }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen
      name="ProfileEdit"
      component={ProfileEditScreen}
      options={{headerTitle: 'Edit Profile'}}
    />
  </Stack.Navigator>
);

export default ProfileStack;
