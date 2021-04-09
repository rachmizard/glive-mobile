import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, HelperText, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontConfig} from '../../assets';
import IconGoogle from './../../assets/images/icon-google.png';

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
      iconPassword: state.showPassword ? 'eye-off' : 'eye',
    });
  };

  const _handleRedirectHome = () => {
    navigation.replace('Home');
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

  return (
    <View style={styles.container}>
      <View style={styles.signInTitleWrapper}>
        <Text style={styles.signInTitleHeadingText}>Welcome to GLIVE</Text>
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
            theme={{
              colors: {
                placeholder: color.greyLine,
                text: color.greyLine,
                primary: color.greyLine,
              },
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
        </View>
      </View>
      <View style={styles.signInButton}>
        <Button
          contentStyle={{height: 48}}
          labelStyle={fontConfig.fontStylesheet.button}
          mode="contained"
          compact={true}
          uppercase={false}
          onPress={() => _handleRedirectHome()}>
          Login
        </Button>
        <Button
          icon={() => (
            <Image
              source={IconGoogle}
              style={{width: 24, height: 24, marginRight: 80}}
            />
          )}
          style={{marginTop: 16}}
          contentStyle={{
            height: 48,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
          labelStyle={fontConfig.fontStylesheet.button}
          mode="contained"
          compact={true}
          uppercase={false}
          color={color.white}>
          Continue With Google
        </Button>
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
