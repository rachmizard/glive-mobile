import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { stringLimit } from '../../utils/helper';
import { fontConfig } from '../../assets';

const { fontStylesheet } = fontConfig;

const GameRoomItem = ({ item, size, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.gameRoomItem}>
        <Image source={item.img} style={styles.gameRoomItemImg(size)} />
        <View style={styles.gameRoomItemTitle}>
          <Text style={styles.gameRoomItemTitleText}>
            {stringLimit(item.name)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameRoomItem;

const styles = StyleSheet.create({
  gameRoomItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  gameRoomItemImg: size => ({
    width: size,
    height: size,
    borderRadius: size * 2,
  }),
  gameRoomItemTitle: {
    marginTop: 8,
    width: 64,
  },
  gameRoomItemTitleText: {
    ...fontStylesheet.overline,
    textAlign: 'center',
  },
});

GameRoomItem.defaultProps = {
  size: 64,
  onPress: () => {},
};

GameRoomItem.propTypes = {
  item: PropTypes.objectOf(Object).isRequired,
  size: PropTypes.number,
  onPress: PropTypes.func,
};
