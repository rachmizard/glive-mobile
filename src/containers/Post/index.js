import React from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Post, PostAction } from '../../components';

const PostContainer = ({
  postContents,
  refreshing,
  onRefresh,
  onPressComment,
  onPressRetweet,
  onPressUpvote,
  onPressDetailPost,
}) => {
  const { container } = styles;
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
            onPressDetailPost={() => onPressDetailPost(post)}
            renderAction={null}
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
