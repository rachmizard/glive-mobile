import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileCardContainer from '../../containers/ProfileCard';
import ProfileTabBarContainer from '../../containers/ProfileTabBar';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ProfileCardContainer navigation={navigation} />
      <ProfileTabBarContainer />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
