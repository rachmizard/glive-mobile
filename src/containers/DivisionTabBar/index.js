import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {color, fontConfig} from '../../assets';
import {ChannelScene, ChatScene, PostScene} from './Scene';

const DivisionTabBarContainer = () => {
  const {fontStylesheet} = fontConfig;

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Posts'},
    {key: 'second', title: 'Chat'},
    {key: 'third', title: 'Channel'},
  ]);

  const _renderScene = SceneMap({
    first: PostScene,
    second: ChatScene,
    third: ChannelScene,
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

export default DivisionTabBarContainer;

const styles = StyleSheet.create({});
