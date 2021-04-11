import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppBar from '../../components/AppBar';
import NotificationListContainer from '../../containers/NotificationList';
import UserPicture from './../../assets/images/user-picture.png';

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      userPict: UserPicture,
      userName: 'Kumal Gumpar',
      lastHour: '1h',
      mentionTo: '@zayross',
      mentions: ['@xypericious', '@ethernal', '@dimzz'],
      content: 'Ola margaretia la quelle diancipate'
    },
    {
      id: 2,
      userPict: UserPicture,
      userName: 'Kumal Gumpar',
      lastHour: '3h',
      mentionTo: '@zayross',
      mentions: [],
      content: 'Ola margaretia la quelle diancipate'
    }
  ];

  return (
    <View style={styles.container}>
      <AppBar
        title="Friend Requests"
        titleIcon="account-plus"
        touchable={true}
        withBadge
        badgeCounter={12}
      />
      <NotificationListContainer notifications={notifications} />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
