import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { HelperText, Text, TextInput } from 'react-native-paper';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseTextInput, ButtonSocial } from '../../components';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import { MMKV } from 'react-native-mmkv';

const SignInScreen = ({ navigation }) => {
  GoogleSignin.configure({
    webClientId: '698183645681-50ngj8q5n5e13ass4h8rubo5rrq4kvot.apps.googleusercontent.com',
  });

  const usersCollection = firestore().collection('Users');

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

    if (
      !state.errors.email.isError &&
      !state.errors.password.isError
    ) {
      auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then(() => {
        _handleRedirectHome();
      }).catch(error => {
        //TODO: show toast/modals error
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
    }
  };

  const _handleRedirectHome = async () => {
    var userDb = await usersCollection.doc(state.email).get()
    .finally(result => result)
    .catch(console.log());

    if (userDb.exists) {
      console.log(userDb.data());
      if (state.password == userDb.get('password')) {
      //save user to local
      MMKV.set('current_user', userDb.data());
      //navigation.replace('MainScreen', { screen: 'Home' });
      }
    } else {
      //go to social on boarding passing state.email
      console.log('doesnt exist');
    }
  };

  const onChangeEmail = e => {
    setState({ ...state, email: e });
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
                onPress={() => _handleSubmitLogin()}>
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
