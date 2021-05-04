import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Appbar, Text, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color, fontConfig } from '../../assets';

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
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={!touchable}
      style={styles.touchable}>
      <Appbar
        theme={{ colors: { primary: color.surface } }}
        style={styles.appBarWrapper}>
        <View style={styles.appBarContent}>
          <View style={styles.appBarTitle}>
            <Icon name={titleIcon} size={24} color={color.text} />
            <Text style={{ ...styles.appBarText, ...{ marginLeft: 8 } }}>
              {title}
            </Text>
          </View>
          {withBadge && (
            <Badge style={styles.appBadge} size={28}>
              {badgeCounter}
            </Badge>
          )}
        </View>
      </Appbar>
    </TouchableOpacity>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBarWrapper: {
    marginTop: 1,
    height: 64,
    paddingHorizontal: 16,
  },
  appBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  touchable: {},
  appBarTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarText: {
    ...fontConfig.fontStylesheet.subtitle1,
  },
  appBadge: {
    color: color.black,
    backgroundColor: color.white,
    ...fontConfig.fontStylesheet.subtitle2,
  },
});

AppBar.defaultProps = {
  touchable: false,
  withBadge: false,
  badgeCounter: 0,
  onLongPress: null,
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  titleIcon: PropTypes.string.isRequired,
  touchable: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
  withBadge: PropTypes.bool,
  badgeCounter: PropTypes.number,
};
