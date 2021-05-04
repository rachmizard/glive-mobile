import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { fontConfig } from '../../assets';

const ChannelSpeaker = ({ speaker }) => {
  return (
    <View style={styles.channelSpeakerWrapper}>
      <Image source={speaker.userImg} style={styles.channelSpeakerImg} />
      <Text style={styles.channelSpeakerText}>{speaker.userName}</Text>
    </View>
  );
};

export default ChannelSpeaker;

const styles = StyleSheet.create({
  channelSpeakerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  channelSpeakerImg: { width: 36, height: 36, marginRight: 8 },
  channelSpeakerText: { ...fontConfig.fontStylesheet.caption },
});
