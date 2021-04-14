import React from 'react';
import PropTypes from 'prop-types';

import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import {color} from './../../assets';

const BaseDialog = ({
  visible,
  onAgree,
  agreeText,
  dismissText,
  onDismiss,
  title,
  content,
}) => {
  const textContentStyle = {
    textAlign: 'center',
  };
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        {title && <Dialog.Title>{title}</Dialog.Title>}
        <Dialog.Content>
          <Paragraph style={textContentStyle}>{content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            uppercase={false}
            mode="text"
            color={color.white}
            onPress={onAgree}>
            {agreeText}
          </Button>
          <Button
            uppercase={false}
            mode="text"
            color={color.white}
            onPress={onDismiss}>
            {dismissText}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default BaseDialog;

BaseDialog.defaultProps = {
  visible: true,
  agreeText: 'Yes',
  dismissText: 'No',
};

BaseDialog.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  onDismiss: PropTypes.func,
  agreeText: PropTypes.string,
  dismissText: PropTypes.string,
};
