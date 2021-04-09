import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const AppBarHeader = ({navigation, previous}) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
};

export default AppBarHeader;

const styles = StyleSheet.create({});
