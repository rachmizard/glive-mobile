import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {color} from './../../assets';

const AppBarHeader = ({navigation, previous, scene}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  let isTitleCenter = false;

  if (title === 'Sign In') {
    isTitleCenter = true;
  }

  return (
    <Appbar.Header style={styles.appBarHeader}>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content
        style={styles.appBarContent(isTitleCenter)}
        title={title}
      />
    </Appbar.Header>
  );
};

export default AppBarHeader;

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: color.surface
  },
  appBarContent: isTitleCenter => ({
    alignItems: isTitleCenter ? 'center' : 'flex-start',
  }),
});
