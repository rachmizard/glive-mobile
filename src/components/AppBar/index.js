import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Appbar, Text, Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontConfig} from './../../assets';

const AppBar = ({
  title,
  titleIcon,
  touchable,
  onPress,
  onLongPress,
  withBadge,
  badgeCounter,
}) => {
  return (
    <Appbar
      theme={{colors: {primary: color.surface}}}
      style={styles.appBarWrapper}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={!touchable}>
        <View style={styles.appBarContent}>
          <View style={styles.appBarTitle}>
            <Icon name={titleIcon} size={24} color={color.text} />
            <Text style={styles.appBarText}>{title}</Text>
          </View>
          {withBadge && (
            <Badge style={styles.appBadge} size={28}>
              {badgeCounter}
            </Badge>
          )}
        </View>
      </TouchableOpacity>
    </Appbar>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBarWrapper: {
    marginTop: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    elevation: 8,
    height: 64,
  },
  appBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  appBarTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 164,
  },
  appBarText: {
    ...fontConfig.fontStylesheet.subtitle1,
  },
  appBadge: {
    marginLeft: 164,
    color: color.black,
    backgroundColor: color.white,
    ...fontConfig.fontStylesheet.subtitle2,
  },
});

AppBar.propTypes = {
  title: PropTypes.any,
  titleIcon: PropTypes.any,
  touchable: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  withBadge: PropTypes.any,
  badgeCounter: PropTypes.any,
};

AppBar.defaultProps = {
  touchable: false,
  withBadge: false,
  badgeCounter: 0,
};
