import React from 'react';
import PropTypes from 'prop-types';

import {Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import IconGoogle from './../../assets/images/icon-google.png';
import IconDiscord from './../../assets/images/icon-discord.png';
import IconSteam from './../../assets/images/icon-steam.png';
import IconFacebook from './../../assets/images/icon-facebook.png';
import {color, fontConfig} from '../../assets';

const ButtonSocial = ({children, onPress, onLongPress, uppercase, social}) => {
  let socialIcon = null;
  let contentStyle = color.white;
  let labelStyle = color.greyDark;

  switch (social) {
    case 'google':
      socialIcon = IconGoogle;
      break;
    case 'discord':
      socialIcon = IconDiscord;
      contentStyle = color.primaryLight;
      labelStyle = color.white;
      break;
    case 'steam':
      socialIcon = IconSteam;
      contentStyle = color.black;
      labelStyle = color.white;
      break;
    case 'facebook':
      socialIcon = IconFacebook;
      contentStyle = '#395185';
      labelStyle = color.white;
      break;
  }

  return (
    <Button
      icon={() => <Image source={socialIcon} style={styles.logo} />}
      contentStyle={styles.contentStyle(contentStyle)}
      labelStyle={styles.labelStyle(labelStyle)}
      mode="contained"
      compact={true}
      uppercase={uppercase}
      onLongPress={onLongPress}
      onPress={onPress}>
      {children}
    </Button>
  );
};

export default ButtonSocial;

const styles = StyleSheet.create({
  logo: {
    width: 24,
    height: 24,
  },
  contentStyle: contentStyle => ({
    height: 48,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: contentStyle,
  }),
  labelStyle: labelStyle => ({
    ...fontConfig.fontStylesheet.button,
    color: labelStyle,
    flex: 1,
  }),
});

ButtonSocial.defaultProps = {
  uppercase: true,
};

ButtonSocial.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  uppercase: PropTypes.bool,
};
