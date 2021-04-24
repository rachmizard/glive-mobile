import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileCardContainer from '../../containers/ProfileCard';
import ProfileTabBarContainer from '../../containers/ProfileTabBar';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCardWrapper}>
        <ProfileCardContainer navigation={navigation} />
      </View>
      <ProfileTabBarContainer />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileCardWrapper: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
});
