import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {kFormatter} from '../../utils/helper';
import {color, fontConfig} from '../../assets';

const {fontStylesheet} = fontConfig;

const PostAction = ({post, onPressComment, onPressRetweet, onPressUpvote}) => {
  return (
    <View style={styles.interactionControl}>
      <TouchableRipple onPress={onPressComment}>
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
      <TouchableRipple onPress={onPressRetweet}>
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
      <TouchableRipple onPress={onPressUpvote}>
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
  );
};

export default PostAction;

const styles = StyleSheet.create({
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
