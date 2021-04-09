import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {color, fontConfig} from '../../assets';

const BaseTag = ({tags, onPress}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.tagWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {tags.map((tag, key) => (
          <Text
            onPress={() => onPress(key)}
            key={key}
            style={styles.tag(tag.active)}>
            {tag.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default BaseTag;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tagWrapper: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  tag: active => ({
    ...fontConfig.fontStylesheet.subtitle2,
    padding: 4,
    textAlign: 'center',
    backgroundColor: active ? color.yellow : color.greyLight,
    color: color.black,
    borderRadius: 5,
    marginHorizontal: 8,
  }),
});

BaseTag.propTypes = {
  tags: PropTypes.array,
};
