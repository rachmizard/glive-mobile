import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {color, fontConfig} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardOverlay = ({
  colors,
  start,
  end,
  tagText,
  totalUser,
  title,
  img,
  overlay = false,
  onPress,
  onLongPress,
  touchable,
}) => {
  let gradient = {
    colors: colors,
    start: start,
    end: end,
  };

  const RenderLinearGradient = () => {
    if (overlay) {
      return (
        <LinearGradient
          style={{borderRadius: 8}}
          colors={colors}
          start={gradient.start}
          end={gradient.end}>
          <Image source={img} style={styles.cardImage} />
        </LinearGradient>
      );
    }

    return <Image source={img} style={styles.cardImage} />;
  };
  return (
    <TouchableOpacity
      disabled={touchable}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.7}>
      <View style={styles.card}>
        <RenderLinearGradient />
        <View style={styles.cardContent}>
          <Text
            style={[
              styles.cardContentText,
              {color: color.yellow, marginBottom: -3},
            ]}>
            {tagText}
          </Text>
          <Title style={styles.cardContentText}>{title}</Title>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Icon
              name="account-multiple"
              color={color.white}
              style={{marginRight: 8}}
              size={18}
            />
            <Text style={[styles.cardContentText]}>{totalUser}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardOverlay;

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  cardImage: {
    width: 160,
    height: 190,
    opacity: 0.325,
    borderRadius: 8,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    top: 100,
    backgroundColor: 'transparent',
  },
  cardContentText: {
    ...fontConfig.fontStylesheet.subtitle2,
  },
});

CardOverlay.propTypes = {
  colors: PropTypes.array,
  start: PropTypes.object,
  end: PropTypes.object,
  tagText: PropTypes.string,
  totalUser: PropTypes.number,
  img: PropTypes.any,
  title: PropTypes.string,
  overlay: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  touchable: PropTypes.bool,
};

CardOverlay.defaultProps = {
  colors: ['#1A1E23', '#4B32C1'],
  start: {x: 1, y: 0.25},
  end: {x: 1, y: 1},
  overlay: false,
  touchable: false,
};
