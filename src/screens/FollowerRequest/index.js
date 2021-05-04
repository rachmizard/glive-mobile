import React, { Component } from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import FollowerRequestItemContainer from '../../containers/FollowerRequestItem';
import { followerRequests } from '../../mocks';

export default class FollowerRequestScreen extends Component {
  constructor() {
    super();
    this.state = {
      requests: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchFollowerRequest();
  }

  onRefresh() {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ requests: followerRequests });
      this.setState({ refreshing: false });
    }, 1000);
  }

  _handleAcceptRequest = id => {
    Alert.alert('Accepted');
  };

  fetchFollowerRequest() {
    this.setState({ requests: followerRequests });
  }

  _handleRejectRequest(id) {
    Alert.alert(`Rejected ${id}`);
  }

  render() {
    const { refreshing, requests } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl
              onRefresh={() => this.onRefresh()}
              refreshing={refreshing}
            />
          }
          contentContainerStyle={styles.containerFlatList}
          data={requests}
          renderItem={({ item, index }) => (
            <FollowerRequestItemContainer
              onPressAccept={() => this._handleAcceptRequest(item.id)}
              onPressReject={() => this._handleRejectRequest(item.id)}
              key={index}
              data={item}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  containerFlatList: {
    marginTop: 16,
  },
});
