import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { ProfileCard } from '../../components';
import ProfileTabBarContainer from '../../containers/ProfileTabBar';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, auth } = this.props;

    return (
      <View style={styles.container}>
        <ProfileCard
          user={auth.user}
          onNavigateEditProfile={() => null}
        />
        <ProfileTabBarContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(ProfileScreen);
