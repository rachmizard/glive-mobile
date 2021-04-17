import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DivisionInfoContainer from '../../containers/DivisionInfo';
import DivisionTabBarContainer from '../../containers/DivisionTabBar';

const DivisionScreen = ({navigation, route}) => {
  const [state, setState] = useState({
    division: {},
  });

  useEffect(() => {
    if (route.params?.division) {
      navigation.setOptions({title: route.params.division.title});
      setState({...state, division: route.params.division});
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <DivisionInfoContainer data={state.division} />
      <DivisionTabBarContainer />
    </View>
  );
};

export default DivisionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
