import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {color} from '../../assets';
import {MonsterHunterWorld} from './../../assets/images/gameroom';
import {GameRoomControlInfo, GameRoomControlAction} from './Parts';

const GameRoomControl = () => {
  const [state, setState] = useState({
    isAudio: true,
    isMute: true,
  });

  const animated = new Animated.Value(255);
  const duration = 500;

  const _slideUpAnimated = () =>
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();

  const navigation = useNavigation();

  useEffect(() => {
    const _unsubscribe = navigation.addListener('focus', () =>
      _slideUpAnimated(),
    );
    return _unsubscribe;
  });

  const _toggleMicHandler = () => {
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
    marginBottom: 1,
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
