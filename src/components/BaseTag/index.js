import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { color, fontConfig } from '../../assets';

const BaseTag = ({ tags, onPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.tagWrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {tags.map((tag, key) => (
          <React.Fragment key={key}>
            <Text
              onPress={() => onPress(key)}
              key={key}
              style={styles.tag(tag.active, tags.length, key)}>
              {tag.name}
            </Text>
          </React.Fragment>
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
  tag: (active, length, key) => ({
    ...fontConfig.fontStylesheet.subtitle2,
    padding: 4,
    textAlign: 'center',
    backgroundColor: active ? color.yellow : color.greyLight,
    color: color.black,
    borderRadius: 5,
    marginLeft: 8,
    marginRight: key + 1 === length ? 8 : 0,
  }),
});

BaseTag.defaultProps = {
  tags: [],
};

BaseTag.propTypes = {
  tags: PropTypes.arrayOf(Array),
};
