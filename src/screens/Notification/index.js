import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppBar from '../../components/AppBar';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar
        title="Friend Requests"
        titleIcon="account-plus"
        touchable={true}
        withBadge
        badgeCounter={12}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
