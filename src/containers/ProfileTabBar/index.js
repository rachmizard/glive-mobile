import React from 'react';
import {StyleSheet} from 'react-native';
import {AppTabScene} from '../../components';
import {PostTabScene, MediaTabScene, UpvoteTabScene} from './Scene';

const ProfileTabBarContainer = () => {
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Media'},
    {key: 'third', title: 'Upvote'},
  ]);

  const scenes = {
    first: PostTabScene,
    second: MediaTabScene,
    third: UpvoteTabScene,
  };

  return <AppTabScene routes={routes} scenes={scenes} />;
};

export default ProfileTabBarContainer;

const styles = StyleSheet.create({});
