import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { color } from '../../assets';
import User1 from '../../assets/images/user-1.png';

const GameRoomUserControl = ({ userName, img }) => {
  return (
    <View style={styles.container}>
      <View style={styles.gameRoomUser}>
        <Image source={User1} style={styles.gameRoomUserImg} />
        <Text>@rebeccaindigo</Text>
      </View>
      <IconButton
        animated={true}
        icon="microphone-off"
        color={color.red}
        size={24}
      />
    </View>
  );
};

export default GameRoomUserControl;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  gameRoomUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameRoomUserImg: { width: 36, height: 36, marginRight: 8 },
});
