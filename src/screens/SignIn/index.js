import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontConfig} from '../../assets';
import {BaseButton, ButtonGoogle} from '../../components';

const SignInScreen = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword: false,
    iconPassword: 'eye',
    errors: {
      email: {
        message: 'Email not invalid',
        isError: false,
      },
      password: {},
    },
  });

  const _handleTogglePassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
      iconPassword: state.showPassword ? 'eye' : 'eye-off',
    });
  };

  const _handleRedirectHome = () => {
    navigation.replace('MainScreen', {screen: 'Home'});
  };

  const onChangeEmail = e => {
    let copy = {...state};

    setState({...state, email: e});

    if (!e.includes('@')) {
      setState(copy);
      copy.errors.email.isError = true;
    } else {
      copy.errors.email.isError = false;
      setState(copy);
    }
  };

  const onChangePassword = e => {
    setState({...state, password: e});
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInTitleWrapper}>
        <Text style={styles.signInTitleHeadingText}>Welcome to GLiVE</Text>
        <Text style={styles.signInTitleSubHeadingText}>
          Social club for gamers and game developers
        </Text>
      </View>
      <View style={styles.signInFormWrapper}>
        <View style={styles.signInFormControl}>
          <TextInput
            mode="outlined"
            label="Email"
            onChangeText={onChangeEmail}
            error={state.errors.email.isError}
            theme={{
              colors: {
                placeholder: color.greyLine,
                text: color.greyLine,
                primary: color.greyLine,
              },
            }}
          />
          <HelperText type="error" visible={state.errors.email.isError}>
            {state.errors.email.message}
          </HelperText>
        </View>
        <View style={styles.signInFormControl}>
          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry={!state.showPassword}
            onChangeText={onChangePassword}
            theme={{
              colors: {
                placeholder: color.greyLine,
                text: color.greyLine,
                primary: color.greyLine,
              },
            }}
            right={
              state.password !== '' && (
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
              )
            }
          />
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
        <View style={{marginTop: 16}}>
          <ButtonGoogle uppercase={false} onPress={() => console.log('Hello')}>
            Continue With Google
          </ButtonGoogle>
        </View>
        <View style={{marginTop: 16, alignItems: 'center'}}>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={fontConfig.fontStylesheet.subtitle1}>
            Register
          </Text>
        </View>
      </View>
    </View>
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
});
