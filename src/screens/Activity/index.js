import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Headline} from 'react-native-paper';

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Headline>Activity Screen!</Headline>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
