import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { BaseButton } from '../../components';
import { logoutSocialAsync } from '../../redux/authReducer/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ProfileEditScreen extends Component {
  constructor(props) {
    super(props);
  }

  _onLogoutHandler() {
    this.props.onLogout();
  }

  render() {
    return (
      <View style={styles.container}>
        <BaseButton onPress={() => this._onLogoutHandler()}>Logout</BaseButton>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutSocialAsync()),
});

export default connect(null, mapDispatchToProps)(ProfileEditScreen);
