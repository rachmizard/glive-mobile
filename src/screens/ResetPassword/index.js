import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { HelperText, Text } from 'react-native-paper';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseTextInput } from '../../components';

const { fontStylesheet } = fontConfig;

export default class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {
        email: {
          message: '',
          isError: false,
        },
      },
    };

    this._handleSubmitResetPassword = this._handleSubmitResetPassword.bind(
      this,
    );
  }

  _onChangeEmail = email => {
    this.setState({ email });

    if (!email.includes('@')) {
      this.setState(state => ({
        errors: {
          ...state.errors,
          email: {
            isError: true,
            message: 'Invalid email, Here is a hint: bernard@gmail.com',
          },
        },
      }));
    } else {
      this.setState(state => ({
        errors: {
          email: { ...state.errors.email, isError: false },
        },
      }));
    }
  };

  _handleSubmitResetPassword() {
    const { email } = this.state;
    const { navigation } = this.props;
    if (!email) {
      this.setState(state => ({
        errors: {
          ...state.errors,
          email: {
            isError: true,
            message: 'Email cannot be empty.',
          },
        },
      }));
      return;
    }

    if (!email.includes('@')) {
      this.setState(state => ({
        errors: {
          ...state.errors,
          email: {
            isError: true,
            message: 'Invalid email, Here is a hint: bernard@gmail.com',
          },
        },
      }));
      return;
    }
    this.setState({ email: '' });

    Alert.alert('Reset Password', 'Successfully reset password');
    navigation.navigate('SignIn');
  }

  render() {
    const { errors } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>GLiVE Account Password</Text>
          <Text style={styles.subTitleText}>
            To reset your password, input your email below
          </Text>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.formControl}>
            <BaseTextInput
              mode="outlined"
              label="Email"
              autoCompleteType="off"
              onChangeText={this._onChangeEmail}
              isError={errors.email.isError}>
              <HelperText
                type="error"
                theme={{ colors: { error: color.yellow } }}
                visible={errors.email.isError}>
                {errors.email.message}
              </HelperText>
            </BaseTextInput>
          </View>
          <View style={styles.formControl}>
            <BaseButton
              uppercase={false}
              onPress={this._handleSubmitResetPassword}>
              Reset
            </BaseButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  titleWrapper: {
    marginTop: 24,
  },
  titleText: fontStylesheet.h5,
  subTitleText: fontStylesheet.body1,
  formWrapper: {
    marginVertical: 24,
  },
  formControl: {
    marginBottom: 5,
  },
});
