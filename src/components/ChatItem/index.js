import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {color, fontConfig} from '../../assets';

const ChatItem = ({chat, disabled, onPress, touchRippleColor}) => {
  return (
    <TouchableRipple
      rippleColor={touchRippleColor}
      disabled={disabled}
      onPress={onPress}>
      <View style={styles.chatItemWrapper}>
        <View style={styles.chatItemBody}>
          <Image source={chat.userImg} style={styles.chatItemImg} />
          <View style={styles.chatInfoWrapper}>
            <Text style={{...fontConfig.fontStylesheet.subtitle2}}>
              {chat.userFullName} ·{' '}
              <Text>
                {chat.userName} · {chat.lastChat}
              </Text>
            </Text>
            <Text>{chat.lastChatText}</Text>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  chatItemWrapper: {
    flex: 1,
    paddingHorizontal: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatItemBody: {
    flexDirection: 'row',
  },
  chatInfoWrapper: {flex: 1, marginLeft: 8},
  chatItemImg: {
    width: 36,
    height: 36,
    borderRadius: 36 * 2,
  },
});

ChatItem.defaultProps = {
  disabled: false,
  touchRippleColor: color.primaryLight,
};

ChatItem.propTypes = {
  chat: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  touchRippleColor: PropTypes.string,
};
