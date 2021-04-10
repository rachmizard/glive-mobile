import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {YourDivisionContainer} from '../../containers';
import GameRoomContainer from '../../containers/GameRoom';
import {gameRooms, yourDivisions} from '../../mocks';

const ActivityScreen = ({navigation}) => {
  const [state, setState] = useState({
    isLoadingGameRoom: false,
    gameRooms: gameRooms,
    yourDivisions: yourDivisions,
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
        <YourDivisionContainer yourDivisions={state.yourDivisions} />
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
