import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import AppBar from '../../components/AppBar';
import NotificationListContainer from '../../containers/NotificationList';
import { notifications } from '../../mocks';

const NotificationScreen = () => {
  const [state] = useState({
    notifications: notifications
  })

  return (
    <View style={styles.container}>
      <AppBar
        title="Friend Requests"
        titleIcon="account-plus"
        touchable={true}
        withBadge
        badgeCounter={12}
      />
      <NotificationListContainer notifications={state.notifications} />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
