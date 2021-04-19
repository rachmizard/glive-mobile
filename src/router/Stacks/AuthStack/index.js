import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ResetPasswordScreen,
  SignInScreen,
  SignUpScreen,
  SuccessSignUpScreen,
} from '../../../screens';
import {AppBarHeader} from '../../../components';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: props => <AppBarHeader {...props} />,
    }}>
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
      name="SuccessSignUp"
      component={SuccessSignUpScreen}
      options={{headerTitle: 'Sign Up'}}
    />
    <Stack.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={{headerTitle: 'Reset Password'}}
    />
  </Stack.Navigator>
);

export default AuthStack;
