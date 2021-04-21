import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {color, fontConfig} from '../../../assets';

const GameRoomControlInfo = ({onPress, logoImg, gameName, gameServerInfo}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.wrapper}>
        <Image source={logoImg} style={styles.gameLogoImg} />
        <View style={{marginLeft: 8}}>
          <Text style={styles.textHeading}>{gameName}</Text>
          <Text style={styles.textSubheading}>{gameServerInfo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameRoomControlInfo;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameLogoImg: {
    width: 36,
    height: 36,
    borderRadius: 36 * 2,
  },
  textHeading: {
    ...fontConfig.fontStylesheet.subtitle2,
    color: color.yellow,
  },
  textSubheading: {
    ...fontConfig.fontStylesheet.caption,
    color: color.white,
  },
});
