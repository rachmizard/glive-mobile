import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {BaseButton, GameRoomImage} from '../../components';
import AvailableRoomContainer from '../../containers/AvailableRoom';
import {gameRooms} from '../../mocks';

export default class GameRoomDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    navigation.setOptions({title: 'Gameroom'});
    this.fetchRoom();
  }

  fetchRoom() {
    const {route} = this.props;
    const {params} = route.params;
    const findGameId = gameRooms.find(game => game.id === params.id);
    if (findGameId) {
      this.setState({rooms: findGameId.rooms});
    }
  }

  render() {
    const {route} = this.props;
    const {params} = route.params;
    const {rooms} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.gameRoomHeader}>
            <GameRoomImage name={params.name} image={params.img} size={64} />
            <View style={styles.availableRoomWrapper}>
              <AvailableRoomContainer rooms={rooms} />
            </View>
          </View>
          <View style={styles.joinGameRoomBtn}>
            <BaseButton uppercase={false} onPress={() => alert('Join')}>
              Join Gameroom
            </BaseButton>
          </View>
        </View>
      </SafeAreaView>
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
