import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import AppBarAction from '../AppBarAction';
import {color, fontConfig} from './../../assets';

const headerCentered = title => {
  switch (title) {
    case 'Sign In':
      return true;

    case 'Sign Up':
      return true;

    case 'Gameroom':
      return true;

    default:
      return false;
  }
};

const AppBarHeader = ({navigation, previous, scene}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header style={styles.appBarHeader}>
      {previous && (
        <Appbar.BackAction color={color.yellow} onPress={navigation.goBack} />
      )}
      <Appbar.Content
        style={styles.appBarContent(headerCentered(title), previous)}
        title={title}
        titleStyle={fontConfig.fontStylesheet.subtitle1}
      />
      <AppBarAction title={title} navigation={navigation} />
    </Appbar.Header>
  );
};

export default AppBarHeader;

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: color.surface,
  },
  appBarContent: (isTitleCenter, isPrevious) => ({
    alignItems: isTitleCenter || isPrevious ? 'center' : 'flex-start',
  }),
});
