import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppBarHeader } from '../../../components';
import { CreatePostScreen } from '../../../screens';

const Stack = createStackNavigator();

const PostStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <AppBarHeader {...props} />,
      }}>
      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{ headerTitle: 'Create Post' }}
      />
    </Stack.Navigator>
  );
};

export default PostStack;
