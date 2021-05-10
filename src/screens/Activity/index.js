import React, { Component } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import {
  ExploreDivisionContainer,
  YourDivisionContainer,
} from '../../containers';
import GameRoomContainer from '../../containers/GameRoom';
import { exploreDivisions, gameRooms, yourDivisions } from '../../mocks';

export default class ActivityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingGameRoom: false,
      refreshing: false,
      gameRooms: [],
      yourDivisions: [],
      exploreDivisions: [],
    };

    this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount() {
    this.onRefresh();
  }

  onRefresh() {
    this.setState({
      isLoadingGameRoom: true,
      refreshing: true,
    });
    this.wait(650).then(() => {
      this.setState({
        gameRooms,
        yourDivisions,
        exploreDivisions,
      });
      this.setState({
        isLoadingGameRoom: false,
        refreshing: false,
      });
    });
  }

  _handleNavigateDivision = division => {
    const { navigation } = this.props;
    navigation.navigate('Division', { division });
  };

  _handleNavigateGameRoom = gameRoom => {
    const { navigation } = this.props;
    navigation.navigate('GameRoomDetail', { params: gameRoom });
  };

  wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  render() {
    const { navigation } = this.props;
    const {
      refreshing,
      isLoadingGameRoom,
      gameRooms,
      yourDivisions,
      exploreDivisions,
    } = this.state;

    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
        }>
        <GameRoomContainer
          onNavigateGameRoom={this._handleNavigateGameRoom}
          navigation={navigation}
          isLoading={isLoadingGameRoom}
          gameRooms={gameRooms}
        />
        <YourDivisionContainer
          navigation={navigation}
          yourDivisions={yourDivisions}
        />
        <Divider style={styles.divider} />
        <ExploreDivisionContainer
          onNavigateDivision={this._handleNavigateDivision}
          exploreDivisions={exploreDivisions}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    marginVertical: 8,
    borderColor: '#4F4F4F',
    borderWidth: 0.5,
  },
});
