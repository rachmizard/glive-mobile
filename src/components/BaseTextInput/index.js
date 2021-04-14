import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-paper';
import {color, theme} from '../../assets';

const BaseTextInput = ({
  label,
  mode,
  autoCompleteType,
  placeholder,
  placeHolderColor,
  textInputColor,
  textInputBackgroundColor,
  focusColor,
  errorColor,
  onChangeText,
  isError,
  roundness,
  children,
  keyboardType,
  secureTextEntry,
  iconPosition,
  icon,
  disabled,
  value,
}) => {
  const themeTextInput = {
    colors: {
      ...theme.colors,
      background: textInputBackgroundColor,
      placeholder: placeHolderColor,
      text: textInputColor,
      primary: focusColor,
      error: errorColor,
    },
    roundness: roundness,
  };

  let IconText = null;

  if (iconPosition === 'left') {
    IconText = {
      left: icon,
    };
  } else if (iconPosition === 'right') {
    IconText = {
      right: icon,
    };
  }

  return (
    <>
      <TextInput
        disabled={disabled}
        autoCompleteType={autoCompleteType}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        mode={mode}
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
        error={isError}
        theme={themeTextInput}
        value={value}
        {...IconText}
      />
      {children}
    </>
  );
};

export default BaseTextInput;

BaseTextInput.defaultProps = {
  mode: 'outlined',
  autoCompleteType: 'off',
  placeHolderColor: color.greyLine,
  textInputColor: color.greyLine,
  textInputBackgroundColor: color.background,
  focusColor: color.blue,
  errorColor: color.blue,
  isError: false,
  roundness: 4,
  keyboardType: 'default',
  secureTextEntry: false,
  disabled: false,
};

BaseTextInput.propTypes = {
  label: PropTypes.string,
  mode: PropTypes.string,
  autoCompleteType: PropTypes.string,
  placeholder: PropTypes.string,
  placeHolderColor: PropTypes.any,
  textInputColor: PropTypes.any,
  textInputBackgroundColor: PropTypes.any,
  focusColor: PropTypes.any,
  errorColor: PropTypes.any,
  onChangeText: PropTypes.func,
  isError: PropTypes.bool,
  roundness: PropTypes.number,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  iconPosition: PropTypes.any,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.string,
};
