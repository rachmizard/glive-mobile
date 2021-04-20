import React, {Component} from 'react';
import {Alert, FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import FollowerRequestItemContainer from '../../containers/FollowerRequestItem';
import {followerRequests} from '../../mocks';

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

  fetchFollowerRequest() {
    this.setState({...this.state.requests, requests: followerRequests});
  }

  onRefresh() {
    this.setState({...this.state, refreshing: true});
    setTimeout(() => {
      this.setState({...this.state, requests: followerRequests});
      this.setState({...this.state, refreshing: false});
    }, 1000);
  }

  _handleAcceptRequest(id) {
    Alert.alert('Accepted');
  }

  _handleRejectRequest(id) {
    Alert.alert('Rejected');
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl
              onRefresh={() => this.onRefresh()}
              refreshing={this.state.refreshing}
            />
          }
          contentContainerStyle={{marginTop: 16}}
          data={this.state.requests}
          renderItem={({item, index}) => (
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
});
