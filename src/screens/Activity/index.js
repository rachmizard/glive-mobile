import React, {Component} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';
import {
  ExploreDivisionContainer,
  YourDivisionContainer,
} from '../../containers';
import GameRoomContainer from '../../containers/GameRoom';
import {exploreDivisions, gameRooms, yourDivisions} from '../../mocks';

export default class ActivityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingGameRoom: false,
      isLoadingYourDivision: false,
      isLoadingExploreDivision: false,
      refreshing: false,
      gameRooms: [],
      yourDivisions: [],
      exploreDivisions: [],
    };
  }

  componentDidMount() {
    this.onRefresh();
  }

  wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  onRefresh() {
    this.setState({
      isLoadingGameRoom: true,
      isLoadingYourDivision: true,
      isLoadingExploreDivision: true,
      refreshing: true,
    });
    this.wait(650).then(() => {
      this.setState({
        gameRooms: gameRooms,
        yourDivisions: yourDivisions,
        exploreDivisions: exploreDivisions,
      });
      this.setState({
        isLoadingGameRoom: false,
        isLoadingYourDivision: false,
        isLoadingExploreDivision: false,
        refreshing: false,
      });
    });
  }

  _handleNavigateDivision = division => {
    this.props.navigation.navigate('Division', {division: division});
  };

  _handleNavigateGameRoom = gameRoom => {
    this.props.navigation.navigate('GameRoomDetail', {params: gameRoom});
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }>
        <GameRoomContainer
          navigation={navigation}
          isLoading={this.state.isLoadingGameRoom}
          gameRooms={this.state.gameRooms}
        />
        <YourDivisionContainer
          navigation={navigation}
          yourDivisions={this.state.yourDivisions}
        />
        <Divider
          style={{
            marginVertical: 8,
            borderColor: '#4F4F4F',
            borderWidth: 0.5,
          }}
        />
        <ExploreDivisionContainer
          onNavigateDivision={this._handleNavigateDivision.bind(this)}
          exploreDivisions={this.state.exploreDivisions}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
