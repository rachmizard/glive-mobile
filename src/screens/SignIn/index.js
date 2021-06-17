import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  HelperText,
  Text,
  TextInput,
  Snackbar,
  ActivityIndicator,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseTextInput, ButtonSocial } from '../../components';
import {
  clearErrorAuth,
  loginAsync,
  loginGoogleAsync,
} from '../../redux/authReducer/actions';

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.authReducer);

  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
    iconPassword: 'eye',
    errors: {
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

  //view handling
  const _handleTogglePassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
      iconPassword: state.showPassword ? 'eye' : 'eye-off',
    });
  };

  const _handleSubmitLogin = () => {
    const copyState = { ...state };
    copyState.errors.email.isError = false;
    copyState.errors.password.isError = false;

    if (!state.email.includes('@')) {
      copyState.errors.email.isError = true;
    }

    if (state.password === '') {
      copyState.errors.password.isError = true;
    }

    setState(copyState);

    if (!state.errors.email.isError && !state.errors.password.isError) {
      dispatch(loginAsync(state.email, state.password));
    }
  };

  const onChangeEmail = e => {
    setState({ ...state, email: e });
  };

  const onChangePassword = e => {
    setState({ ...state, password: e });
  };

  const onGoogleButtonPress = () => {
    dispatch(loginGoogleAsync());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <React.Fragment>
        <View style={styles.signInTitleWrapper}>
          <Text style={styles.signInTitleHeadingText}>Welcome to GLiVE</Text>
          <Text style={styles.signInTitleSubHeadingText}>
            Social club for gamers and game developers
          </Text>
        </View>
        <View style={styles.signInFormWrapper}>
          <View style={styles.signInFormControl}>
            <BaseTextInput
              mode="outlined"
              label="Email"
              autoCompleteType="off"
              onChangeText={onChangeEmail}
              value={state.email}
              isError={state.errors.email.isError}
              keyboardType="email-address">
              <HelperText
                type="error"
                theme={{ colors: { error: color.yellow } }}
                visible={state.errors.email.isError}>
                {state.errors.email.message}
              </HelperText>
            </BaseTextInput>
          </View>
          <View style={styles.signInFormControl}>
            <BaseTextInput
              autoCompleteType="off"
              mode="outlined"
              label="Password"
              value={state.password}
              secureTextEntry={!state.showPassword}
              onChangeText={onChangePassword}
              isError={state.errors.password.isError}
              iconPosition="right"
              icon={
                <TextInput.Icon
                  name={state.iconPassword}
                  color={color.grayLine}
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
        <View style={styles.signInButton}>
          <View>
            <BaseButton
              disabled={authReducer.isLoading}
              mode="contained"
              uppercase={false}
              size="medium"
              onPress={() => _handleSubmitLogin()}>
              Login
            </BaseButton>
          </View>
          <View style={styles.buttonSocialWrapper}>
            <ButtonSocial
              social="google"
              uppercase={false}
              onPress={() => onGoogleButtonPress()}>
              Continue With Google
            </ButtonSocial>
          </View>
          <View style={styles.textInformationWrapper}>
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={styles.textInformation}>
              Dont have account? <Text>Register Now</Text>
            </Text>
            <Text
              onPress={() => navigation.navigate('ResetPassword')}
              style={styles.textInformation}>
              Forgot password? <Text>Reset Now</Text>
            </Text>
          </View>
          <ActivityIndicator
            size={36}
            animating={authReducer.isLoading}
            color={color.white}
          />
        </View>
      </React.Fragment>
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
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  signInTitleWrapper: {
    marginTop: 24,
  },
  signInTitleHeadingText: fontConfig.fontStylesheet.h5,
  signInTitleSubHeadingText: fontConfig.fontStylesheet.body1,
  signInFormWrapper: {
    marginVertical: 24,
  },
  signInFormControl: {
    marginBottom: 5,
  },
  buttonSocialWrapper: { marginTop: 16 },
  textInformationWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  textInformation: {
    ...fontConfig.fontStylesheet.body2,
    color: color.yellow,
    marginTop: 16,
  },
});
