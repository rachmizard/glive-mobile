import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { color } from '../../../../assets';
import { Post, PostAction } from '../../../../components';
import { postsAndReplies } from '../../../../mocks';

const PostTabScene = props => {
  const dispatch = useDispatch();
  const [postAndReplies, setPostAndReplies] = useState(postsAndReplies);
  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPostAndReplies(postsAndReplies);
    wait(1000).then(() => setRefreshing(false));
  };

  return (
    <FlatList
      style={styles.container}
      data={postAndReplies}
      renderItem={({ item }) => (
        <Post
          post={item}
          onPressDetailPost={() => alert('navigate to detail post')}
          renderAction={<PostAction post={item} />}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={() => <Divider style={styles.divider} />}
    />
  );
};

export default PostTabScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  divider: { backgroundColor: color.grayLine, marginVertical: 8 },
});
