import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, View} from 'react-native';
import {Text, Caption} from 'react-native-paper';
import {color, fontConfig, theme} from './../../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {fontStylesheet} = fontConfig;

const Post = ({post, onPressDetailPost, renderAction}) => {
  const {
    userPict,
    name,
    lastHour,
    userName,
    contentImg,
    content,
    tags,
    isReposted,
  } = post;

  return (
    <View style={styles.postItem}>
      {isReposted && <Text style={styles.textInfo}>Reposted By you</Text>}
      <PostHeader
        name={name}
        userPict={userPict}
        lastHour={lastHour}
        userName={userName}
      />
      <PostContent
        contentImg={contentImg}
        content={content}
        onPressDetailPost={onPressDetailPost}
        renderAction={renderAction}
        tags={tags}
      />
    </View>
  );
};

export default Post;

const PostHeader = ({name, userPict, lastHour, userName}) => (
  <View style={styles.postHeader}>
    <View style={{marginRight: 8}}>
      <Image source={userPict} style={styles.postUserImg} />
    </View>
    <View style={styles.postUserIdentity}>
      <Text style={fontStylesheet.subtitle1}>
        {name} · {lastHour}
      </Text>
      <Text style={fontStylesheet.caption}>{userName}</Text>
    </View>
    <Icon
      color={color.black}
      size={16}
      style={styles.dotsVertical}
      name="dots-vertical"
    />
  </View>
);

const PostContent = ({
  contentImg,
  content,
  onPressDetailPost,
  renderAction,
  tags,
}) => (
  <View style={styles.postContent}>
    {contentImg ? (
      <Image source={contentImg} style={styles.contentImg} />
    ) : null}
    <Caption onPress={onPressDetailPost} style={styles.contentCaptionText}>
      {content}
    </Caption>
    <Text style={styles.contentTagsText}>{tags.join(' ')}</Text>
    {renderAction}
  </View>
);

const styles = StyleSheet.create({
  textInfo: {
    color: color.greyLine,
    ...fontStylesheet.subtitle2,
    marginBottom: 4,
  },
  postItem: {
    marginTop: 8,
  },
  postHeader: {
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
    justifyContent: 'center',
  },
  contentImg: {
    borderRadius: theme.roundness,
    height: 326,
    width: 326,
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
});

Post.propTypes = {
  post: PropTypes.object,
  onPressDetailPost: PropTypes.func,
  renderAction: PropTypes.node,
};
