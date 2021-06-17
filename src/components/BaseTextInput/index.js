import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper';
import { color, theme } from '../../assets';

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
  height,
  ...otherProps
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
    roundness,
  };

  let IconText = null;
  const styles = [];

  if (iconPosition === 'left') {
    IconText = {
      left: icon,
    };
  } else if (iconPosition === 'right') {
    IconText = {
      right: icon,
    };
  }
  if (height) {
    styles.push({ height });
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
        style={styles}
        value={value}
        {...IconText}
        {...otherProps}
      />
      {children}
    </>
  );
};

export default BaseTextInput;

BaseTextInput.defaultProps = {
  mode: 'outlined',
  autoCompleteType: 'off',
  placeHolderColor: color.grayLine,
  textInputColor: color.grayLine,
  textInputBackgroundColor: color.background,
  focusColor: color.blue,
  errorColor: color.blue,
  isError: false,
  roundness: 4,
  keyboardType: 'default',
  secureTextEntry: false,
  disabled: false,
  iconPosition: 'right',
  icon: '',
  height: 0,
  placeholder: '',
  label: '',
};

BaseTextInput.propTypes = {
  label: PropTypes.string,
  mode: PropTypes.string,
  autoCompleteType: PropTypes.string,
  placeholder: PropTypes.string,
  placeHolderColor: PropTypes.string,
  textInputColor: PropTypes.string,
  textInputBackgroundColor: PropTypes.string,
  focusColor: PropTypes.string,
  errorColor: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  roundness: PropTypes.number,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  iconPosition: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  height: PropTypes.number,
};
