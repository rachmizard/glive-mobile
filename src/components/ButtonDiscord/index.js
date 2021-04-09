import React from 'react';
import PropTypes from 'prop-types';

import {Image} from 'react-native';
import {Button} from 'react-native-paper';
import IconDiscord from './../../assets/images/icon-discord.png';
import {color, fontConfig} from '../../assets';

const ButtonDiscord = ({children, onPress, onLongPress, uppercase}) => {
  let colorButton = color.primaryLight;
  let contentStyle = [
    {
      height: 48,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: color.primaryLight,
    },
  ];

  let labelStyle = [fontConfig.fontStylesheet.button, {color: color.white}];

  return (
    <Button
      icon={() => (
        <Image
          source={IconDiscord}
          style={{width: 24, height: 24, marginRight: 60}}
        />
      )}
      contentStyle={contentStyle}
      labelStyle={labelStyle}
      mode="contained"
      compact={true}
      uppercase={uppercase}
      onLongPress={onLongPress}
      color={colorButton}
      onPress={onPress}>
      {children}
    </Button>
  );
};

export default ButtonDiscord;

ButtonDiscord.defaultProps = {
  uppercase: true,
};

ButtonDiscord.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  uppercase: PropTypes.bool,
};
