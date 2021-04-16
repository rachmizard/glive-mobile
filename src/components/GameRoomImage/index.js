import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {fontConfig} from '../../assets';

const {fontStylesheet} = fontConfig;

const GameRoomImage = ({name, image, size}) => {
  return (
    <View style={styles.gameRoomWrapper}>
      <Image source={image} style={styles.gameRoomImg(size)} />
      <Text style={fontStylesheet.subtitle1}>{name}</Text>
    </View>
  );
};

export default GameRoomImage;

const styles = StyleSheet.create({
  gameRoomWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  gameRoomImg: size => ({
    width: size,
    height: size,
    borderRadius: size * 2,
    marginBottom: 8,
  }),
});

GameRoomImage.defaultProps = {
  size: 64,
};

GameRoomImage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.any,
  size: PropTypes.number,
};
