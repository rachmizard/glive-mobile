import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {color, fontConfig} from '../../assets';
import {PostTabScene, MediaTabScene, UpvoteTabScene} from './Scene';

const ProfileTabBarContainer = () => {
  const {fontStylesheet} = fontConfig;

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Posts'},
    {key: 'second', title: 'Media'},
    {key: 'third', title: 'Upvote'},
  ]);

  const _renderScene = SceneMap({
    first: PostTabScene,
    second: MediaTabScene,
    third: UpvoteTabScene,
  });

  const _renderTabBar = props => (
    <TabBar
      {...props}
      indicatorContainerStyle={{backgroundColor: color.surface}}
      indicatorStyle={{backgroundColor: color.white}}
      labelStyle={{...fontStylesheet.button, textTransform: 'capitalize'}}
    />
  );

  return (
    <TabView
      lazy
      sceneContainerStyle={{backgroundColor: color.surface}}
      navigationState={{index, routes}}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ProfileTabBarContainer;

const styles = StyleSheet.create({});
