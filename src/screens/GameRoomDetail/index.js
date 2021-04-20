import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseButton, GameRoomImage} from '../../components';
import AvailableRoomContainer from '../../containers/AvailableRoom';
import {gameRooms} from './.././../mocks';

export default class GameRoomDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({title: 'Gameroom'});
    this.fetchRoom();
  }

  fetchRoom() {
    const {params} = this.props.route.params;
    const findGameId = gameRooms.find(game => game.id === params.id);
    if (findGameId) {
      this.setState({rooms: findGameId.rooms});
    }
  }

  render() {
    const {params} = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.gameRoomHeader}>
            <GameRoomImage name={params.name} image={params.img} size={64} />
            <View style={styles.availableRoomWrapper}>
              <AvailableRoomContainer rooms={this.state.rooms} />
            </View>
          </View>
          <View style={styles.joinGameRoomBtn}>
            <BaseButton uppercase={false}>Join Gameroom</BaseButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gameRoomHeader: {
    marginTop: 16,
  },
  availableRoomWrapper: {
    marginTop: 28,
  },
  joinGameRoomBtn: {
    marginBottom: 16,
  },
});
