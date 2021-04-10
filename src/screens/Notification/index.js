import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Headline} from 'react-native-paper';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Headline>Notification Screen!</Headline>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
