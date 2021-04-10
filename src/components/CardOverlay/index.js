import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {color, fontConfig} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardOverlay = ({colors, start, end, tagText, totalUser, title, img}) => {
  let gradient = {
    colors: colors,
    start: start,
    end: end,
  };

  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <LinearGradient
          style={{borderRadius: 8}}
          colors={colors}
          start={gradient.start}
          end={gradient.end}>
          <Image source={img} style={styles.cardImage} />
        </LinearGradient>
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
    marginTop: 8,
    marginRight: 16,
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
};

CardOverlay.defaultProps = {
  colors: ['#1A1E23', '#4B32C1'],
  start: {x: 1, y: 0.25},
  end: {x: 1, y: 1},
};
