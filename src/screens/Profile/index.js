import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ProfileCard } from '../../components';
import ProfileTabBarContainer from '../../containers/ProfileTabBar';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Ashley Doe',
        userName: '@xypericious',
        post: 2,
        upvotes: 524,
        mutuals: 34,
        division: 4,
      },
    };
  }

  render() {
    const { navigation } = this.props;

    const { user } = this.state;

    return (
      <View style={styles.container}>
        <ProfileCard
          user={user}
          onNavigateEditProfile={() => navigation.navigate('ProfileEdit')}
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
