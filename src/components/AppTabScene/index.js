import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { color, fontConfig } from '../../assets';

const AppTabScene = ({ lazy, routes, swipeEnabled, scenes }) => {
  const { fontStylesheet } = fontConfig;

  const [index, setIndex] = React.useState(0);

  const layout = useWindowDimensions();

  const _renderScene = SceneMap(scenes);

  const _renderTabBar = props => (
    <TabBar
      {...props}
      indicatorContainerStyle={{ backgroundColor: color.surface }}
      indicatorStyle={{ backgroundColor: color.white }}
      labelStyle={{ ...fontStylesheet.button, ...styles.labelTextStyle }}
    />
  );

  return (
    <TabView
      swipeEnabled={swipeEnabled}
      lazy={lazy}
      sceneContainerStyle={{ backgroundColor: color.surface }}
      navigationState={{ index, routes }}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default AppTabScene;

const styles = StyleSheet.create({
  labelTextStyle: {
    textTransform: 'capitalize',
  },
});

AppTabScene.defaultProps = {
  lazy: true,
  swipeEnabled: true,
};

AppTabScene.propTypes = {
  lazy: PropTypes.bool,
  routes: PropTypes.arrayOf(Object).isRequired,
  scenes: PropTypes.objectOf(Object).isRequired,
  swipeEnabled: PropTypes.bool,
};
