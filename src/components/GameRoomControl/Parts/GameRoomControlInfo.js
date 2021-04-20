import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {color} from '../../../assets';

const GameRoomControlInfo = ({logoImg, gameName, gameServerInfo}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Clicked')}>
      <View style={{flexDirection: 'row'}}>
        <Image source={logoImg} style={styles.gameLogoImg} />
        <View style={{marginLeft: 8}}>
          <Text style={{color: color.yellow}}>{gameName}</Text>
          <Text>{gameServerInfo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameRoomControlInfo;

const styles = StyleSheet.create({
  gameLogoImg: {
    width: 36,
    height: 36,
    borderRadius: 36 * 2,
  },
});
