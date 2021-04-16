import React, {useState} from 'react';
import {
  Alert,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Caption, Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {posts} from './../../mocks';
import {color, fontConfig, theme} from './../../assets';
import {kFormatter} from '../../constants/helper';

const {fontStylesheet} = fontConfig;

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
    Alert.alert('Retweet', `Pressed post id ${id}`);
  };

  const _handlePressUpvote = ({id}) => {
    Alert.alert('Upvote', `Pressed post id ${id}`);
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
          <View key={index} style={styles.postItem}>
            <View style={styles.postItemHeader}>
              <View style={{marginRight: 8}}>
                <Image source={post.userPict} style={styles.postUserImg} />
              </View>
              <View style={styles.postUserIdentity}>
                <Text style={fontStylesheet.subtitle1}>
                  {post.name} · {post.lastHour}
                </Text>
                <Text style={fontStylesheet.caption}>{post.userName}</Text>
              </View>
              <Icon
                color={color.black}
                size={16}
                style={styles.dotsVertical}
                name="dots-vertical"
              />
            </View>
            <View style={styles.postContent}>
              {post.contentImg ? (
                <Image source={post.contentImg} style={styles.contentImg} />
              ) : null}
              <Caption
                onPress={() => _handleNavigatePostDetail(post)}
                style={styles.contentCaptionText}>
                {post.content}
              </Caption>
              <Text style={styles.contentTagsText}>{post.tags.join(' ')}</Text>
              <View style={styles.interactionControl}>
                <TouchableRipple onPress={() => _handlePressComment(post)}>
                  <View style={styles.interaction}>
                    <Icon
                      name="comment-outline"
                      size={24}
                      style={styles.iconInteraction()}
                    />
                    <Text style={styles.interactionCounter()}>
                      {kFormatter(post.totalComments)}
                    </Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => _handlePressRetweet(post)}>
                  <View style={styles.interaction}>
                    <Icon
                      name="sync"
                      size={24}
                      style={styles.iconInteraction(post.isRetweeted)}
                    />
                    <Text style={styles.interactionCounter(post.isRetweeted)}>
                      {kFormatter(post.totalRetweeted)}
                    </Text>
                  </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => _handlePressUpvote(post)}>
                  <View style={styles.interaction}>
                    <Icon
                      name="arrow-up"
                      size={24}
                      style={styles.iconInteraction(post.isUpvote)}
                    />
                    <Text style={styles.interactionCounter(post.isUpvote)}>
                      {kFormatter(post.totalUpvoted)}
                    </Text>
                  </View>
                </TouchableRipple>
              </View>
            </View>
          </View>
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
  postItem: {
    marginTop: 8,
  },
  postItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  postUserImg: {
    height: 38,
    width: 38,
    borderRadius: 38 * 2,
  },
  postUserIdentity: {
    flex: 1,
    alignSelf: 'stretch',
  },
  dotsVertical: {
    padding: 1,
    backgroundColor: color.white,
    borderRadius: 8 * 2,
  },
  postContent: {
    marginRight: 30,
    marginTop: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  contentImg: {
    borderRadius: theme.roundness,
    height: 326,
    width: 326,
    resizeMode: 'contain',
  },
  contentCaptionText: {
    marginTop: 12,
    ...fontStylesheet.caption,
    color: color.white,
    textAlign: 'justify',
  },
  contentTagsText: {
    ...fontStylesheet.caption,
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
  iconInteraction: (bool = false) => ({
    color: bool ? color.yellow : color.white,
  }),
  interactionCounter: (bool = false) => ({
    ...fontStylesheet.caption,
    color: bool ? color.yellow : color.white,
  }),
});
