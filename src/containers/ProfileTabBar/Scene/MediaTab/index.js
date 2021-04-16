import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
} from 'react-native';
import {Caption, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {medias} from '../../../../mocks';
import {color, fontConfig, theme} from './../../../../assets';
import {kFormatter} from './../../../../constants/helper';

const MediaTabScene = props => {
  const [contents, setContents] = useState(medias);
  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setContents(medias);
    wait(1000).then(() => setRefreshing(false));
  });

  const {fontStylesheet} = fontConfig;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {contents.map((media, index) => (
        <View key={index} style={styles.mediaItem}>
          {media.isReposted && (
            <Text style={styles.textInfo}>Reposted By you</Text>
          )}
          <View style={styles.mediaItemHeader}>
            <View style={{marginRight: 8}}>
              <Image source={media.userPict} style={styles.mediaUserImg} />
            </View>
            <View style={styles.mediaUserIdentity}>
              <Text style={fontStylesheet.subtitle1}>
                {media.name} · {media.lastHour}
              </Text>
              <Text style={fontStylesheet.caption}>{media.userName}</Text>
            </View>
            <Icon
              color={color.black}
              size={16}
              style={styles.dotsVertical}
              name="dots-vertical"
            />
          </View>
          <View style={styles.mediaContent}>
            {media.contentImg && (
              <Image source={media.contentImg} style={styles.contentImg} />
            )}
            <Caption style={styles.contentCaptionText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Caption>
            <Text style={styles.contentTagsText}>#tags #sample</Text>
            <View style={styles.interactionControl}>
              <View style={styles.interaction}>
                <Icon name="comment-outline" size={24} style={styles.icon()} />
                <Text style={styles.interactionCounter()}>
                  {kFormatter(media.totalComments)}
                </Text>
              </View>
              <View style={styles.interaction}>
                <Icon
                  style={styles.icon(media.isRetweeted)}
                  name="sync"
                  size={24}
                />
                <Text style={styles.interactionCounter(media.isRetweeted)}>
                  {kFormatter(media.totalRetweeted)}
                </Text>
              </View>
              <View style={styles.interaction}>
                <Icon
                  name="arrow-up"
                  size={24}
                  style={styles.icon(media.isRetweeted)}
                />
                <Text style={styles.interactionCounter(media.isRetweeted)}>
                  {kFormatter(media.totalUpvoted)}
                </Text>
              </View>
            </View>
          </View>
        </View>
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
    color: color.greyLine,
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
