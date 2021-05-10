import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { color, fontConfig } from '../../assets';
import IconHome from '../../assets/images/icon-home.svg';
import IconHomeActive from '../../assets/images/icon-home-active.svg';
import IconActivity from '../../assets/images/icon-activity.svg';
import IconActivityActive from '../../assets/images/icon-activity-active.svg';
import IconAddContent from '../../assets/images/icon-add-content.svg';
import IconNotification from '../../assets/images/icon-notification.svg';
import IconNotificationActive from '../../assets/images/icon-notification-active.svg';
import IconProfile from '../../assets/images/icon-profile.svg';
import IconProfileActive from '../../assets/images/icon-profile-active.svg';

const AppBottomTabItem = ({
  label,
  options,
  onPress,
  onLongPress,
  isFocused,
}) => {
  let icon = null;
  switch (label) {
    case 'Home':
      icon = isFocused ? (
        <IconHomeActive width={18} height={18} />
      ) : (
        <IconHome width={18} height={18} />
      );
      break;

    case 'Activity':
      icon = isFocused ? (
        <IconActivityActive width={18} height={18} />
      ) : (
        <IconActivity width={18} height={18} />
      );
      break;

    case 'Add':
      icon = <IconAddContent width={36} height={36} />;
      break;

    case 'Notification':
      icon = isFocused ? (
        <IconNotificationActive width={18} height={18} />
      ) : (
        <IconNotification width={18} height={18} />
      );
      break;

    case 'Profile':
      icon = isFocused ? (
        <IconProfileActive width={18} height={18} />
      ) : (
        <IconProfile width={18} height={18} />
      );
      break;

    default:
      icon = <IconHome />;
      break;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      {icon}
    </TouchableOpacity>
  );
};

export default AppBottomTabItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  text: isFocused => ({
    color: isFocused ? color.primary : color.greyLight,
    fontFamily: fontConfig.fontStylesheet.subtitle1,
  }),
});
