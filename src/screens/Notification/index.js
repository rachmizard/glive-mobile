import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppBar from '../../components/AppBar';
import NotificationListContainer from '../../containers/NotificationList';
import {notifications} from '../../mocks';

export default class NotificationScreen extends Component {
  state = {
    notifications: [],
    refreshing: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({notifications: notifications});
  }

  wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  onRefresh() {
    this.setState({refreshing: true});
    this.wait(1000).then(() => {
      this.fetchData();
      this.setState({refreshing: false});
    });
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <AppBar
          title="Friend Requests"
          titleIcon="account-plus"
          touchable={true}
          withBadge
          badgeCounter={12}
          onPress={() => navigation.navigate('FollowerRequest')}
        />
        <NotificationListContainer
          notifications={this.state.notifications}
          onRefresh={this.onRefresh.bind(this)}
          refreshing={this.state.refreshing}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
