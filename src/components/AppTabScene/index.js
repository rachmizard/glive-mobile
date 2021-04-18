import React from 'react';
import PropTypes from 'prop-types';
import {useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {color, fontConfig} from './../../assets';

const AppTabScene = ({lazy = true, routes, swipeEnabled = true, scenes}) => {
  const {fontStylesheet} = fontConfig;

  const [index, setIndex] = React.useState(0);

  const layout = useWindowDimensions();

  const _renderScene = SceneMap(scenes);

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
      swipeEnabled={swipeEnabled}
      lazy={lazy}
      sceneContainerStyle={{backgroundColor: color.surface}}
      navigationState={{index, routes}}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default AppTabScene;

AppTabScene.propTypes = {
  lazy: PropTypes.bool,
  routes: PropTypes.arrayOf(Object),
  scenes: PropTypes.object,
  swipeEnabled: PropTypes.bool,
};
