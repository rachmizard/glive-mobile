import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseTextInput, ButtonSocial } from '../../components';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const SignInScreen = ({ navigation }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
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
      password: {},
    },
  });

  GoogleSignin.configure({
    webClientId: '698183645681-50ngj8q5n5e13ass4h8rubo5rrq4kvot.apps.googleusercontent.com',
  });
  
  //view handling
  const _handleTogglePassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
      iconPassword: state.showPassword ? 'eye' : 'eye-off',
    });
  };

  const _handleRedirectHome = () => {
    //check on firestore if user doesnot exist then go to socialOnBoardingPage

    //else
    //save user to redux
    navigation.replace('MainScreen', { screen: 'Home' });
  };

  const onChangeEmail = e => {
    const copy = { ...state };

    setState({ ...state, email: e });

    if (!e.includes('@')) {
      setState(copy);
      copy.errors.email.isError = true;
    } else {
      copy.errors.email.isError = false;
      setState(copy);
    }
  };

  const onChangePassword = e => {
    setState({ ...state, password: e });
  };

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  if (!user) {
    return (
      <ScrollView>
        <View style={styles.container}>
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
                isError={state.errors.email.isError}>
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
                secureTextEntry={!state.showPassword}
                onChangeText={onChangePassword}
                isError={state.errors.password.isError}
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
          <View style={styles.signInButton}>
            <View>
              <BaseButton
                mode="contained"
                uppercase={false}
                size="medium"
                onPress={() => _handleRedirectHome()}>
                Login
              </BaseButton>
            </View>
            <View style={styles.buttonSocialWrapper}>
              <ButtonSocial
                social="google"
                uppercase={false}
                onPress={() => onGoogleButtonPress().then(() => _handleRedirectHome())}>
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
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.signInTitleWrapper}>
          <Text style={styles.signInTitleHeadingText}>Welcome {user.email}</Text>
        </View>
        <View>
            <BaseButton
              mode="contained"
              uppercase={false}
              size="medium"
              onPress={() => auth()
                .signOut()
                .then(() => console.log('User signed out!'))}>
              Logout
            </BaseButton>
          </View>
      </View>
    );
  }
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
  },
  textInformation: {
    ...fontConfig.fontStylesheet.body2,
    color: color.yellow,
    marginTop: 16,
  },
});
