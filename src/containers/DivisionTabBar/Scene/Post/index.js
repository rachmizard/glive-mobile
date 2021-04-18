import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';
import {color} from '../../../../assets';
import {Post, PostAction} from '../../../../components';
import {postsDivision} from './../../../../mocks';

const PostsTab = () => {
  const [posts, setPosts] = useState(postsDivision);
  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setPosts(postsDivision);
    wait(1000).then(() => setRefreshing(false));
  });

  return (
    <FlatList
      style={styles.container}
      data={posts}
      renderItem={({item}) => (
        <Post post={item} renderAction={<PostAction post={item} />} />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={() => (
        <Divider style={{backgroundColor: color.greyLine, marginVertical: 8}} />
      )}
    />
  );
};

export default PostsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8
  },
});
