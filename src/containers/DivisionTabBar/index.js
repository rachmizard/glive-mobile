import React from 'react';
import {StyleSheet} from 'react-native';
import {AppTabScene} from '../../components';
import {PostScene, ChatScene, ChannelScene} from './Scene';

const DivisionTabBarContainer = () => {
  const [routes] = React.useState([
    {key: 'first', title: 'Posts'},
    {key: 'second', title: 'Chat'},
    {key: 'third', title: 'Channel'},
  ]);

  const scenes = {
    first: PostScene,
    second: ChatScene,
    third: ChannelScene,
  };

  return <AppTabScene routes={routes} scenes={scenes} />;
};

export default DivisionTabBarContainer;

const styles = StyleSheet.create({});
