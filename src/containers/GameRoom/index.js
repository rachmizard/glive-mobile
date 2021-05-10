import React, { useEffect, useRef } from 'react';

import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import GameRoomItem from '../../components/GameRoomItem';
import { color, fontConfig } from '../../assets';

const GameRoomContainer = ({
  onNavigateGameRoom,
  gameRooms,
  isLoading,
  navigation,
}) => {
  const ref = useRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      ref.current.scrollTo({ x: 0, y: 0, animated: true });
    });

    return () => unsubscribe();
  }, [navigation]);

  const LoadingBar = () => (
    <ActivityIndicator
      color={color.white}
      size={30}
      style={styles.activityIndicator}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Title style={fontConfig.fontStylesheet.h6}>Gameroom</Title>
      </View>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <ScrollView
          ref={ref}
          contentContainerStyle={styles.gameRoomWrapper}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {gameRooms.map((gameRoom, index) => (
            <GameRoomItem
              key={index}
              item={gameRoom}
              onPress={() => onNavigateGameRoom(gameRoom)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default GameRoomContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  gameRoomWrapper: {
    flexDirection: 'row',
    height: 100,
    paddingHorizontal: 8,
  },
  activityIndicator: { alignItems: 'center', height: 100 },
});
