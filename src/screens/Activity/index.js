import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import GameRoomContainer from '../../containers/GameRoom';
import { gameRooms } from '../../mocks';

const ActivityScreen = ({navigation}) => {
  const [state, setState] = useState({
    isLoadingGameRoom: false,
    gameRooms: gameRooms,
  });

  useEffect(() => {
    setState({...state, isLoadingGameRoom: true});
    setTimeout(() => setState({...state, isLoadingGameRoom: false}), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GameRoomContainer
          navigation={navigation}
          isLoading={state.isLoadingGameRoom}
          gameRooms={state.gameRooms}
        />
      </ScrollView>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
