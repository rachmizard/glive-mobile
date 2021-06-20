import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDirectMessage from '../../assets/images/icon-send.png';
import { color } from '../../assets';

const AppBarAction = ({ title, navigation }) => {
  let renderIcon = null;
  switch (title) {
    case 'Home':
      renderIcon = {
        icon: () => <Image source={IconDirectMessage} style={styles.icon} />,
        onPress: () => navigation.navigate('DirectMessage'),
      };
      break;
    case 'Profile':
      renderIcon = {
        icon: () => <Icon name="cog" color={color.white} size={24} />,
        onPress: () => navigation.navigate('ProfileEdit'),
      };
      break;

    default:
      break;
  }

  return <Appbar.Action {...renderIcon} />;
};

export default AppBarAction;

const styles = StyleSheet.create({
  icon: { width: 24, height: 24 },
});
