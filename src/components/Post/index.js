import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color, fontConfig } from '../../assets';
import BaseSliderImage from '../BaseSliderImage';

const { fontStylesheet } = fontConfig;

const Post = ({ post, onPressDetailPost, renderAction }) => {
  const {
    userPict,
    name,
    lastHour,
    userName,
    contentImgs,
    content,
    tags,
    isReposted,
  } = post;

  return (
    <View style={styles.container}>
      <View style={styles.postWrapper}>
        {isReposted && <Text style={styles.textInfo}>Reposted By you</Text>}
        <PostHeader
          name={name}
          userPict={userPict}
          lastHour={lastHour}
          userName={userName}
        />
        <PostContent
          contentImgs={contentImgs}
          content={content}
          onPressDetailPost={onPressDetailPost}
          renderAction={renderAction}
          tags={tags}
        />
      </View>
      <View>
        <Icon
          color={color.black}
          size={16}
          style={styles.dotsVertical}
          name="dots-vertical"
        />
      </View>
    </View>
  );
};

export default Post;

const PostHeader = ({ name, userPict, lastHour, userName }) => (
  <View style={styles.postHeader}>
    <View style={styles.postUserImg}>
      <Image source={userPict} style={styles.img} />
    </View>
    <View style={styles.postUserIdentity}>
      <Text style={fontStylesheet.subtitle1}>
        {name} · {lastHour}
      </Text>
      <Text style={fontStylesheet.caption}>{userName}</Text>
    </View>
  </View>
);

const PostContent = ({
  contentImgs,
  content,
  onPressDetailPost,
  renderAction,
  tags,
}) => (
  <View style={styles.postContent}>
    {contentImgs ? <BaseSliderImage images={contentImgs} /> : null}
    <Caption onPress={onPressDetailPost} style={styles.contentCaptionText}>
      {content}
    </Caption>
    <Text style={styles.contentTagsText}>{tags.join(' ')}</Text>
    {renderAction}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInfo: {
    color: color.grayLine,
    ...fontStylesheet.subtitle2,
    marginBottom: 4,
  },
  postWrapper: {
    flex: 1,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  postUserImg: {
    marginRight: 8,
  },
  img: {
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
    flex: 1,
    marginTop: 8,
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

Post.defaultProps = {
  onPressDetailPost: () => ({}),
};

Post.propTypes = {
  post: PropTypes.objectOf(Object).isRequired,
  onPressDetailPost: PropTypes.func,
  renderAction: PropTypes.node.isRequired,
};
