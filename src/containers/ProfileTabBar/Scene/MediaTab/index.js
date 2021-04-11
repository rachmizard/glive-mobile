import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Caption, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {medias} from '../../../../mocks';
import {color, fontConfig, theme} from './../../../../assets';

const MediaTabScene = props => {
  const [contents] = useState(medias);

  const {fontStylesheet} = fontConfig;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {contents.map((media, index) => (
        <View key={index} style={styles.mediaItem}>
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
            <Image source={media.contentImg} style={styles.contentImg} />
            <Caption style={styles.contentCaptionText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Caption>
            <Text style={styles.contentTagsText}>#tags #sample</Text>
          </View>
          <View style={styles.interactionControl}>
            <View style={styles.interaction}>
              <Icon name="comment-outline" size={24} color={color.white} />
              <Text style={styles.interactionCounter}>359</Text>
            </View>
            <View style={styles.interaction}>
              <Icon name="sync" size={24} color={color.white} />
              <Text style={styles.interactionCounter}>11k</Text>
            </View>
            <View style={styles.interaction}>
              <Icon name="arrow-up" size={24} color={color.white} />
              <Text style={styles.interactionCounter}>53</Text>
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
  },
  contentTagsText: {
    ...fontConfig.fontStylesheet.caption,
    color: color.yellow,
  },
  interactionControl: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  interaction: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  interactionCounter: {
    ...fontConfig.fontStylesheet.caption,
  },
});

export default MediaTabScene;
