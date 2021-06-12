import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, Text, Snackbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseTextInput } from '../../components';
import {
  clearErrorAuth,
  sendResetPasswordToEmail,
} from '../../redux/authReducer/actions';

const { fontStylesheet } = fontConfig;

class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successReset: false,
      successMessage: 'Successfully sent to your email',
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

  _toggleSuccessSnackBar() {
    this.setState(state => {
      return {
        ...state,
        successReset: !state.successReset,
      };
    });
  }

  _handleSubmitResetPassword() {
    const { email } = this.state;

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
      this.setState(state => {
        return {
          errors: {
            ...state.errors,
            email: {
              isError: true,
              message: 'Invalid email, Here is a hint: bernard@gmail.com',
            },
          },
        };
      });
      return;
    }

    this.props.onResetPassword(email).then(() => {
      this._toggleSuccessSnackBar();
    });
  }

  render() {
    const { errors } = this.state;
    const { authReducer, onClearError } = this.props;

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
              isError={errors.email.isError}
              value={this.state.email}>
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
        <Snackbar
          visible={authReducer.isError}
          duration={700}
          onDismiss={() => ({})}
          action={{
            label: 'Close',
            onPress: () => {
              onClearError();
            },
          }}>
          <Text>{authReducer.errorMessages}</Text>
        </Snackbar>
        <Snackbar
          visible={this.state.successReset}
          duration={700}
          onDismiss={() => ({})}
          action={{
            label: 'Close',
            onPress: () => {
              this._toggleSuccessSnackBar();
            },
          }}>
          <Text>{this.state.successMessage}</Text>
        </Snackbar>
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

const mapStateToProps = state => ({
  authReducer: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  onResetPassword: email => dispatch(sendResetPasswordToEmail(email)),
  onClearError: () => dispatch(clearErrorAuth()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordScreen);
