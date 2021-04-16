import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {BaseButton, GameRoomImage} from '../../components';
import AvailableRoomContainer from '../../containers/AvailableRoom';
import {gameRooms} from './.././../mocks';

const GameRoomDetailScreen = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({title: 'Gameroom'});

    const findGameId = gameRooms.find(game => game.id === params.id);
    if (findGameId) {
      setRooms(findGameId.rooms);
    }
  }, [navigation]);

  const {params} = route.params;
  const [rooms, setRooms] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.gameRoomImageWrapper}>
        <GameRoomImage name={params.name} image={params.img} size={64} />
      </View>
      <View style={styles.availableRoomWrapper}>
        <AvailableRoomContainer rooms={rooms} />
      </View>
      <View style={styles.joinGameRoomBtn}>
        <BaseButton uppercase={false}>Join Gameroom</BaseButton>
      </View>
    </View>
  );
};

export default GameRoomDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  wrapper: {
    flexDirection: 'column',
  },
  gameRoomImageWrapper: {
    marginTop: 16,
    flex: 1,
  },
  availableRoomWrapper: {
    marginTop: 28,
    flex: 2,
  },
  joinGameRoomBtn: {
    marginBottom: 16,
  },
});
