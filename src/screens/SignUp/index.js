import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  HelperText,
  Text,
  TextInput,
  Snackbar,
  ActivityIndicator,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseTextInput } from '../../components';
import { clearErrorAuth, registerAsync } from '../../redux/authReducer/actions';

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const authReducer = useSelector(state => state.authReducer);

  const [state, setState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    iconPassword: 'eye',
    errors: {
      name: {
        message: 'Name cannot be empty',
        isError: false,
      },
      username: {
        message: 'Username cannot be empty',
        isError: false,
      },
      email: {
        message: 'Invalid email, Here is a hint: bernard@gmail.com',
        isError: false,
      },
      password: {
        message: 'Password cannot be empty',
        isError: false,
      },
    },
  });

  const _handleTogglePassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
      iconPassword: state.showPassword ? 'eye' : 'eye-off',
    });
  };

  const onChangeText = (target, e) => {
    setState({ ...state, [target]: e });
  };

  const _handleSubmitRegister = () => {
    const copyState = { ...state };
    copyState.errors.name.isError = false;
    copyState.errors.username.isError = false;
    copyState.errors.email.isError = false;
    copyState.errors.password.isError = false;

    if (state.name === '') {
      copyState.errors.name.isError = true;
    }

    if (state.username === '') {
      copyState.errors.username.isError = true;
    }

    if (!state.email.includes('@')) {
      copyState.errors.email.isError = true;
    }

    if (state.password === '') {
      copyState.errors.password.isError = true;
    }

    setState(copyState);

    if (
      !state.errors.name.isError &&
      !state.errors.username.isError &&
      !state.errors.email.isError &&
      !state.errors.password.isError
    ) {
      dispatch(
        registerAsync(state.name, state.username, state.email, state.password),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.signUpTitleWrapper}>
        <Text style={styles.signUpTitleHeadingText}>
          GLiVE Account Registration
        </Text>
        <Text style={styles.signUpTitleSubHeadingText}>
          Please fill in the field below :)
        </Text>
      </View>
      <View style={styles.signUpFormWrapper}>
        <View style={styles.signUpFormControl}>
          <BaseTextInput
            mode="outlined"
            label="Name"
            onChangeText={e => onChangeText('name', e)}
            isError={state.errors.name.isError}>
            <HelperText
              type="error"
              theme={{ colors: { error: color.yellow } }}
              visible={state.errors.name.isError}>
              {state.errors.name.message}
            </HelperText>
          </BaseTextInput>
        </View>
        <View style={styles.signUpFormControl}>
          <BaseTextInput
            mode="outlined"
            label="Username"
            onChangeText={e => onChangeText('username', e)}
            value={state.username}
            isError={state.errors.username.isError}>
            <HelperText
              type="error"
              theme={{ colors: { error: color.yellow } }}
              visible={state.errors.username.isError}>
              {state.errors.username.message}
            </HelperText>
          </BaseTextInput>
        </View>
        <View style={styles.signUpFormControl}>
          <BaseTextInput
            mode="outlined"
            label="Email"
            onChangeText={e => onChangeText('email', e)}
            value={state.email}
            isError={state.errors.email.isError}>
            <HelperText
              type="error"
              theme={{ colors: { error: color.yellow } }}
              visible={state.errors.email.isError}>
              {state.errors.email.message}
            </HelperText>
          </BaseTextInput>
        </View>
        <View style={styles.signUpFormControl}>
          <BaseTextInput
            mode="outlined"
            label="Password"
            secureTextEntry={!state.showPassword}
            isError={state.errors.password.isError}
            onChangeText={e => onChangeText('password', e)}
            iconPosition="right"
            icon={
              <TextInput.Icon
                name={state.iconPassword}
                color={color.greyLine}
                onPress={() => _handleTogglePassword()}
              />
            }>
            <HelperText
              type="error"
              theme={{ colors: { error: color.yellow } }}
              visible={state.errors.password.isError}>
              {state.errors.password.message}
            </HelperText>
          </BaseTextInput>
        </View>
      </View>
      <View style={styles.signUpButton}>
        <View>
          <BaseButton
            mode="contained"
            uppercase={false}
            size="medium"
            onPress={() => _handleSubmitRegister()}>
            Register
          </BaseButton>
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={styles.textInformation}>
            Already have account? <Text>Sign In Now</Text>
          </Text>
        </View>
        <ActivityIndicator
          size={36}
          animating={authReducer.isLoading}
          color={color.white}
        />
      </View>

      <Snackbar
        visible={authReducer.isError}
        duration={700}
        onDismiss={() => ({})}
        action={{
          label: 'Close',
          onPress: () => {
            dispatch(clearErrorAuth());
          },
        }}>
        <Text>{authReducer.errorMessages}</Text>
      </Snackbar>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  signUpTitleWrapper: {
    marginTop: 24,
  },
  signUpTitleHeadingText: fontConfig.fontStylesheet.h5,
  signUpTitleSubHeadingText: fontConfig.fontStylesheet.body1,
  signUpFormWrapper: {
    marginVertical: 24,
  },
  signUpFormControl: {
    marginBottom: 5,
  },
  signUpButton: {
    height: 160,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInformation: {
    ...fontConfig.fontStylesheet.body2,
    color: color.yellow,
    marginTop: 18,
    textAlign: 'center',
  },
});
