import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ChatBubble from '../ChatBubble';

const ChatUser = ({chat}) => {
  return (
    <View style={styles.chatUserWrapper}>
      <Image source={chat.userImg} style={styles.chatUserImg} />
      <ChatBubble chat={chat} />
    </View>
  );
};

export default ChatUser;

const styles = StyleSheet.create({
  chatUserWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
  },
  chatUserImg: {
    width: 36,
    height: 36,
    borderRadius: 36 * 2,
  },
});
