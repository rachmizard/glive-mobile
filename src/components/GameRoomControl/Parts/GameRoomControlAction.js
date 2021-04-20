import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {color} from '../../../assets';

const GameRoomControlAction = ({
  onToggleMic,
  onToggleAudio,
  isMute,
  isAudio,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <IconButton
        animated={true}
        icon={isMute ? 'microphone-off' : 'microphone'}
        color={isMute ? color.red : color.white}
        size={24}
        onPress={onToggleMic}
      />
      <IconButton
        animated={true}
        icon={isAudio ? 'volume-high' : 'volume-off'}
        color={isAudio ? color.white : color.red}
        size={24}
        onPress={onToggleAudio}
      />
    </View>
  );
};

export default GameRoomControlAction;

const styles = StyleSheet.create({});
