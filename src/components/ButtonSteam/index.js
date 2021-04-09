import React from 'react';
import PropTypes from 'prop-types';

import {Image} from 'react-native';
import {Button} from 'react-native-paper';
import IconSteam from './../../assets/images/icon-steam.png';
import {color, fontConfig} from '../../assets';

const ButtonSteam = ({children, onPress, onLongPress, uppercase}) => {
  let contentStyle = [
    {
      height: 48,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: '#000000',
    },
  ];

  let labelStyle = [fontConfig.fontStylesheet.button, {color: color.white}];

  return (
    <Button
      icon={() => (
        <Image
          source={IconSteam}
          style={{width: 24, height: 24, marginRight: 80}}
        />
      )}
      contentStyle={contentStyle}
      labelStyle={labelStyle}
      mode="contained"
      compact={true}
      uppercase={uppercase}
      onLongPress={onLongPress}
      onPress={onPress}>
      {children}
    </Button>
  );
};

export default ButtonSteam;

ButtonSteam.defaultProps = {
  uppercase: true,
};

ButtonSteam.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  uppercase: PropTypes.bool,
};
