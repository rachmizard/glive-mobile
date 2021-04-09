import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Headline} from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Headline>Profile Screen!</Headline>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
