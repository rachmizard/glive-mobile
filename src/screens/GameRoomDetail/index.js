import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const GameRoomDetailScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({title: 'Gameroom'});
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Game Room Detail!</Text>
    </View>
  );
};

export default GameRoomDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
