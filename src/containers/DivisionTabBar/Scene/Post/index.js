import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const PostsTab = () => {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
    </View>
  );
};

export default PostsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
