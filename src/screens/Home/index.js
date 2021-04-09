import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Headline} from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Headline>Home</Headline>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
