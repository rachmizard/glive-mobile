import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {color} from '../../assets';
import {MonsterHunterWorld} from './../../assets/images/gameroom';
import GameRoomControlAction from './Parts/GameRoomControlAction';
import GameRoomControlInfo from './Parts/GameRoomControlInfo';

const GameRoomControl = () => {
  const [state, setState] = useState({
    isAudio: true,
    isMute: true,
  });

  const navigation = useNavigation();

  const animated = new Animated.Value(255);
  const duration = 500;

  const _slideUp = () =>
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();

  const _slideDown = () =>
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 255,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      _slideUp();
    });

    return unsubscribe;
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      _slideDown();
    });

    return unsubscribe;
  });

  const _toggleMicHandler = () => {
    _slideDown();
    setState({...state, isMute: !state.isMute});
  };

  const _toggleAudioHandler = () => {
    setState({...state, isAudio: !state.isAudio});
  };

  return (
    <Animated.View
      style={[
        styles.gameRoomControlWrapper,
        {transform: [{translateY: animated}]},
      ]}>
      <View style={styles.gameRoomControlBody}>
        <GameRoomControlInfo
          gameName="Monster Hunter: World"
          gameServerInfo="2 Players - Indonesia"
          logoImg={MonsterHunterWorld}
        />
        <GameRoomControlAction
          isMute={state.isMute}
          isAudio={state.isAudio}
          onToggleMic={_toggleMicHandler}
          onToggleAudio={_toggleAudioHandler}
        />
      </View>
    </Animated.View>
  );
};

export default GameRoomControl;

const styles = StyleSheet.create({
  gameRoomControlWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 3,
    backgroundColor: color.surface,
    height: 56,
  },
  gameRoomControlBody: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
