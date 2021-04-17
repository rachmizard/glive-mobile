import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {color, fontConfig, theme} from '../../assets';

const ChatBubble = ({chat}) => {
  return (
    <View style={styles.chatBubbleWrapper}>
      <Text style={fontConfig.fontStylesheet.subtitle2}>
        {chat.userName} · {chat.lastChat}{' '}
      </Text>
      <View style={styles.chatBubble}>
        <Text style={fontConfig.fontStylesheet.caption}>{chat.chatText}</Text>
      </View>
    </View>
  );
};

export default ChatBubble;

const styles = StyleSheet.create({
  chatBubbleWrapper: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  chatBubble: {
    marginTop: 4,
    backgroundColor: color.brown,
    borderRadius: theme.roundness,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
