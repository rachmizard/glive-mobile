import React, {useState} from 'react';
import {Alert, RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {posts} from './../../mocks';
import {Post, PostAction} from '../../components';

const PostContainer = () => {
  const [postContents, setPostContents] = useState(posts);
  const [refreshing, setRefreshing] = useState(false);

  const DEFAULT_TIMEOUT = 1000;

  const {container} = styles;

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setPostContents(posts);
    wait(DEFAULT_TIMEOUT).then(() => setRefreshing(false));
  });

  const _handlePressComment = ({id}) => {
    Alert.alert('Comment', `Pressed post id ${id}`);
  };

  const _handlePressRetweet = ({id}) => {
    const retweeted = [...postContents];
    retweeted.find(i => i.id === id).isRetweeted = !retweeted.find(
      i => i.id === id,
    ).isRetweeted;
    setPostContents(retweeted);
  };

  const _handlePressUpvote = ({id}) => {
    const upvoted = [...postContents];
    upvoted.find(i => i.id === id).isUpvote = !upvoted.find(i => i.id === id)
      .isUpvote;
    setPostContents(upvoted);
  };

  const _handleNavigatePostDetail = ({id}) => {
    Alert.alert('Navigate', `Pressed post id ${id}`);
  };

  return (
    <>
      <ScrollView
        style={container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {postContents.map((post, index) => (
          <Post
            key={index}
            post={post}
            onPressDetailPost={() => _handleNavigatePostDetail(post)}
            renderAction={
              <PostAction
                post={post}
                onPressComment={() => _handlePressComment(post)}
                onPressRetweet={() => _handlePressRetweet(post)}
                onPressUpvote={() => _handlePressUpvote(post)}
              />
            }
          />
        ))}
      </ScrollView>
    </>
  );
};

export default PostContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
});
