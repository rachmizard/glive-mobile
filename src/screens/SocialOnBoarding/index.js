import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, Text } from 'react-native-paper';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseTextInput } from '../../components';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SocialOnBoardingScreen = ({ navigation }) => {
  const usersCollection = firestore().collection('Users');

  const [state, setState] = useState({
    username: '',
    errors: {
      username: {
        message: 'Username cannot be empty',
        isError: false,
      },
    },
  });

  const onChangeUsername = e => {
    setState({ ...state, username: e });
  };

  const _handleSubmitRegister = () => {
    const copyState = { ...state };
    copyState.errors.username.isError = false;

    if (state.username === '') {
      copyState.errors.username.isError = true;
    }
    setState(copyState);

    if (!state.errors.username.isError) {
      auth()
        .createUserWithEmailAndPassword(state.email, state.password)
        .then(() => {
          //TODO: make users model
          usersCollection
            .doc(state.email)
            .set({
              name: state.name,
              userName: state.username,
              password: state.password,
              profileImageUrl: 'default',
              backgroundImageUrl: 'default',
              accountType: 'public',
              postCount: 0,
              divisionCount: 0,
              friendsCount: 0,
              likersCount: 0,
            })
            .then(() => {
              //save to redux
              console.log('User added!');
              navigation.replace('SuccessSignUp');
            });
        })
        .catch(error => {
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
            label="Username"
            onChangeText={onChangeUsername}
            isError={state.errors.username.isError}>
            <HelperText
              type="error"
              theme={{ colors: { error: color.yellow } }}
              visible={state.errors.username.isError}>
              {state.errors.username.message}
            </HelperText>
          </BaseTextInput>
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

export default SocialOnBoardingScreen;

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
    flex: 1,
  },
  textInformation: {
    ...fontConfig.fontStylesheet.body2,
    color: color.yellow,
    marginTop: 24,
    textAlign: 'center',
  },
});
