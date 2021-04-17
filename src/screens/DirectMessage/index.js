import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class DirectMessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Direct Message!</Text>
      </View>
    );
  }
}
