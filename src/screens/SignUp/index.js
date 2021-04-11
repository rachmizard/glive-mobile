import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontConfig} from '../../assets';
import {BaseButton} from '../../components';

const SignUpScreen = ({navigation}) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    showPassword: false,
    iconPassword: 'eye',
    errors: {
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

  const onChangeUsername = e => {
    setState({...state, username: e});
  };

  const onChangeEmail = e => {
    setState({...state, email: e});
  };

  const onChangePassword = e => {
    setState({...state, password: e});
  };

  const _handleSubmitRegister = () => {
    const copyState = {...state};
    copyState.errors.username.isError = false;
    copyState.errors.email.isError = false;
    copyState.errors.password.isError = false;

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
      !state.errors.username.isError &&
      !state.errors.email.isError &&
      !state.errors.password.isError
    ) {
      navigation.replace('SuccessSignUp');
      return;
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
          <TextInput
            mode="outlined"
            label="Username"
            onChangeText={onChangeUsername}
            error={state.errors.username.isError}
            theme={{
              colors: {
                placeholder: color.greyLine,
                text: color.greyLine,
                primary: color.blue,
                error: color.blue,
              },
              roundness: 4,
            }}
          />
          <HelperText
            type="error"
            theme={{colors: {error: color.yellow}}}
            visible={state.errors.username.isError}>
            {state.errors.username.message}
          </HelperText>
        </View>
        <View style={styles.signUpFormControl}>
          <TextInput
            mode="outlined"
            label="Email"
            onChangeText={onChangeEmail}
            error={state.errors.email.isError}
            theme={{
              colors: {
                placeholder: color.greyLine,
                text: color.greyLine,
                primary: color.blue,
                error: color.blue,
              },
              roundness: 4,
            }}
          />
          <HelperText
            type="error"
            theme={{colors: {error: color.yellow}}}
            visible={state.errors.email.isError}>
            {state.errors.email.message}
          </HelperText>
        </View>
        <View style={styles.signUpFormControl}>
          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry={!state.showPassword}
            error={state.errors.password.isError}
            onChangeText={onChangePassword}
            theme={{
              colors: {
                placeholder: color.greyLine,
                text: color.greyLine,
                primary: color.blue,
                error: color.blue,
              },
              roundness: 4,
            }}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={state.iconPassword}
                    size={24}
                    color={color.greyLine}
                  />
                )}
                onPress={() => _handleTogglePassword()}
              />
            }
          />
          <HelperText
            type="error"
            theme={{colors: {error: color.yellow}}}
            visible={state.errors.password.isError}>
            {state.errors.password.message}
          </HelperText>
        </View>
      </View>
      <View style={styles.signUpButton}>
        <BaseButton
          mode="contained"
          uppercase={false}
          size="medium"
          onPress={() => _handleSubmitRegister()}>
          Register
        </BaseButton>
      </View>
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
    flex: 7,
  },
  signUpFormControl: {
    marginBottom: 5,
  },
  signUpButton: {
    flex: 1,
  },
});
