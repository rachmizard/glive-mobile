import React from 'react';
import PropTypes from 'prop-types';

import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {color, fontConfig} from '../../assets';

const BaseButton = ({
  children,
  mode,
  onPress,
  onLongPress,
  uppercase,
  disabled,
  size,
}) => {
  let style = [];
  let colorButton = color.greyDark;
  let contentStyle = {height: 48, justifyContent: 'center'};
  let labelStyle = [fontConfig.fontStylesheet.button];

  if (size === 'small') {
    contentStyle = {...contentStyle, height: 36};
  }

  if (mode === 'text') {
    labelStyle.push({color: color.blue});
  }

  if (mode === 'contained') {
    colorButton = color.primary;
  }

  if (mode === 'contained' && disabled) {
    colorButton = color.greyLight;
    contentStyle = {...contentStyle, backgroundColor: color.greyDark};
    labelStyle.push({color: color.white});
  }

  if (mode === 'outlined') {
    labelStyle.push({color: color.white});
    style.push({borderColor: color.white, borderWidth: 1});
  }

  if (mode === 'outlined' && disabled) {
    labelStyle.push({color: color.greyMedium});
    style.push({borderColor: color.greyMedium});
  }

  return (
    <Button
      style={style}
      contentStyle={contentStyle}
      labelStyle={labelStyle}
      mode={mode}
      color={colorButton}
      disabled={disabled}
      uppercase={uppercase}
      onLongPress={onLongPress}
      onPress={onPress}>
      {children}
    </Button>
  );
};

export default BaseButton;

BaseButton.defaultProps = {
  uppercase: true,
  mode: 'contained',
  disabled: false,
  size: 'medium',
};

BaseButton.propTypes = {
  children: PropTypes.any,
  mode: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  uppercase: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

const styles = StyleSheet.create({});
