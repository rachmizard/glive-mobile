import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {
  ExploreDivisionContainer,
  YourDivisionContainer,
} from '../../containers';
import GameRoomContainer from '../../containers/GameRoom';
import {exploreDivisions, gameRooms, yourDivisions} from '../../mocks';

const ActivityScreen = ({navigation}) => {
  const [state, setState] = useState({
    isLoadingGameRoom: false,
    gameRooms: gameRooms,
    yourDivisions: yourDivisions,
    exploreDivisions: exploreDivisions,
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
        <YourDivisionContainer
          navigation={navigation}
          yourDivisions={state.yourDivisions}
        />
        <Divider
          style={{marginVertical: 8, borderColor: '#4F4F4F', borderWidth: 0.5}}
        />
        <ExploreDivisionContainer
          navigation={navigation}
          exploreDivisions={state.exploreDivisions}
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
