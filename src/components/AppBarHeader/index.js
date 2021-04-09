import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {color, fontConfig} from './../../assets';
import IconDirectMessage from './../../assets/images/icon-send.png';

const AppBarHeader = ({navigation, previous, scene}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  let isTitleCenter = false;
  let backAction = null;

  if (title === 'Sign In' || title === 'Sign Up') {
    isTitleCenter = true;
  }

  if (previous) {
    backAction = (
      <Appbar.BackAction color={color.primary} onPress={navigation.goBack} />
    );
  }

  const _handleRedirectMessage = () => {
    console.log('Hello');
  };

  return (
    <Appbar.Header style={styles.appBarHeader}>
      {backAction}
      <Appbar.Content
        style={styles.appBarContent(isTitleCenter)}
        title={title}
        titleStyle={fontConfig.fontStylesheet.subtitle1}
      />
      {title === 'Home' && (
        <Appbar.Action
          icon={() => (
            <Image source={IconDirectMessage} style={{width: 24, height: 24}} />
          )}
          onPress={_handleRedirectMessage}
        />
      )}
    </Appbar.Header>
  );
};

export default AppBarHeader;

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: color.surface,
  },
  appBarContent: isTitleCenter => ({
    alignItems: isTitleCenter ? 'center' : 'flex-start',
  }),
});
