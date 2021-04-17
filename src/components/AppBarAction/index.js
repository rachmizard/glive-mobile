import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import IconDirectMessage from './../../assets/images/icon-send.png';

const AppBarAction = ({title, navigation}) => {
  let renderIcon = null;

  switch (title) {
    case 'Home':
      renderIcon = {
        icon: () => (
          <Image source={IconDirectMessage} style={{width: 24, height: 24}} />
        ),
        onPress: () => navigation.navigate('DirectMessage'),
      };
      break;

    default:
      break;
  }

  return <Appbar.Action {...renderIcon} />;
};

export default AppBarAction;

const styles = StyleSheet.create({});
