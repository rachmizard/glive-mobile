import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  HelperText,
  Text,
  Snackbar,
  ActivityIndicator,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseTextInput } from '../../components';
import {
  clearErrorAuth,
  registSocialOnBoarding,
} from '../../redux/authReducer/actions';

const SocialOnBoardingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.authReducer);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setState({ ...state, name: authReducer.user.name });
    });

    return () => unsubscribe();
  });

  const [state, setState] = useState({
    name: '',
    username: '',
    errors: {
      name: {
        message: 'Name cannot be empty',
        isError: false,
      },
      username: {
        message: 'Username cannot be empty',
        isError: false,
      },
    },
  });

  const onChangeInput = (e, target) => {
    setState({ ...state, [target]: e });
  };

  const _handleSubmitRegister = () => {
    const copyState = { ...state };
    copyState.errors.username.isError = false;

    if (state.username === '') {
      copyState.errors.username.isError = true;
    }
    setState(copyState);

    if (!state.errors.username.isError) {
      dispatch(registSocialOnBoarding(state.name, state.username));
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
            value={state.name}
            onChangeText={e => onChangeInput(e, 'name')}
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
            onChangeText={e => onChangeInput(e, 'username')}
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
          disabled={authReducer.isLoading}
          onPress={() => _handleSubmitRegister()}>
          Register
        </BaseButton>
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
    height: 130,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInformation: {
    ...fontConfig.fontStylesheet.body2,
    color: color.yellow,
    marginTop: 24,
    textAlign: 'center',
  },
});
