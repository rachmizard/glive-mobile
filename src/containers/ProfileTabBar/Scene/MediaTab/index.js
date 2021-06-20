import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';
import Post from '../../../../components/Post';
import PostAction from '../../../../components/PostAction';
import { color, fontConfig, theme } from '../../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { getPostMediaAuthorAsync } from '../../../../redux/postReducer/actions';

const MediaTabScene = ({ route }) => {
  const dispatch = useDispatch();

  const userPostsMedia = useSelector(state => state.postReducer.userPostsMedia);

  useEffect(() => {
    dispatch(getPostMediaAuthorAsync());
  }, [route]);

  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = () => {
    setRefreshing(true);
    wait(1000).then(() => {
      setRefreshing(false);
      dispatch(getPostMediaAuthorAsync());
    });
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {userPostsMedia.map((media, index) => (
        <Post
          key={index}
          post={media}
          renderAction={<PostAction post={media} />}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  textInfo: {
    color: color.grayLine,
    ...fontConfig.fontStylesheet.subtitle2,
    marginBottom: 4,
  },
  mediaItem: {
    marginTop: 8,
  },
  mediaItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mediaUserImg: {
    height: 38,
    width: 38,
    borderRadius: 38 * 2,
  },
  mediaUserIdentity: {
    flex: 1,
    alignSelf: 'stretch',
  },
  dotsVertical: {
    padding: 1,
    backgroundColor: color.white,
    borderRadius: 8 * 2,
  },
  mediaContent: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginRight: 40,
  },
  contentImg: {
    borderRadius: theme.roundness,
    height: 326,
    width: 326,
    resizeMode: 'contain',
  },
  contentCaptionText: {
    ...fontConfig.fontStylesheet.caption,
    color: color.white,
    paddingTop: 8,
  },
  contentTagsText: {
    ...fontConfig.fontStylesheet.caption,
    color: color.yellow,
  },
  interactionControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  interaction: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  interactionCounter: (bool = false) => ({
    ...fontConfig.fontStylesheet.caption,
    color: bool ? color.yellow : color.white,
  }),
  icon: (bool = false) => ({
    color: bool ? color.yellow : color.white,
  }),
});

export default MediaTabScene;
