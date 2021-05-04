import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const UpvoteTabScene = props => {
  return (
    <View style={styles.container}>
      <Text>Upvote</Text>
    </View>
  );
};

export default UpvoteTabScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
