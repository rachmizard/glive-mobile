import React from 'react';
import PropTypes from 'prop-types';

import {Image} from 'react-native';
import {Button} from 'react-native-paper';
import IconGoogle from './../../assets/images/icon-google.png';
import {color, fontConfig} from '../../assets';

const ButtonGoogle = ({children, onPress, onLongPress, uppercase}) => {
  let colorButton = color.white;
  let contentStyle = [
    {
      height: 48,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: color.white,
    },
  ];

  let labelStyle = [fontConfig.fontStylesheet.button, {color: color.greyDark}];

  return (
    <Button
      icon={() => (
        <Image
          source={IconGoogle}
          style={{width: 24, height: 24, marginRight: 80}}
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

export default ButtonGoogle;

ButtonGoogle.defaultProps = {
  uppercase: true,
};

ButtonGoogle.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  uppercase: PropTypes.bool,
};
