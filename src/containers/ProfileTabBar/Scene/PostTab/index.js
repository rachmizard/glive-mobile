import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { color } from '../../../../assets';
import { Post, PostAction } from '../../../../components';
import { getPostByAuthorAsync } from '../../../../redux/postReducer/actions';

const PostTabScene = ({ route }) => {
  const dispatch = useDispatch();

  const getUserPosts = useSelector(state => state.postReducer.userPosts);

  useEffect(() => {
    dispatch(getPostByAuthorAsync());
  }, [route]);

  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = () => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
      dispatch(getPostByAuthorAsync());
    });
  };

  return (
    <FlatList
      style={styles.container}
      data={getUserPosts}
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
