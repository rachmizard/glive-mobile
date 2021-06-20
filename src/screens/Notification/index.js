import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import AppBar from '../../components/AppBar';
import NotificationListContainer from '../../containers/NotificationList';
import { notifications } from '../../mocks';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      refreshing: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      notifications,
    };
  }

  componentDidMount() {}

  onRefresh() {
    this.setState({ refreshing: true });
    this.wait(1000).then(() => {
      this.setState({ notifications });
      this.setState({ refreshing: false });
    });
  }

  wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  render() {
    const { navigation } = this.props;
    const { refreshing, notifications } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* <AppBar
          title="Friend Requests"
          titleIcon="account-plus"
          touchable={true}
          withBadge
          badgeCounter={12}
          onPress={() => navigation.navigate('FollowerRequest')}
        />
        <NotificationListContainer
          notifications={notifications}
          onRefresh={() => this.onRefresh()}
          refreshing={refreshing}
        /> */}
        <View style={styles.container}>
          <Text>Work In Progress</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
