import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseTag} from '../../components';

const HomeScreen = () => {
  const [state, setState] = useState({
    tags: [
      {
        name: '#all',
        active: true,
      },
      {
        name: '#tothebone',
        active: false,
      },
      {
        name: '#E32022',
        active: false,
      },
      {
        name: '#hashtagpanjang',
        active: false,
      },
      {
        name: '#panjangtagnya',
        active: false,
      },
    ],
  });

  const _handlePressTag = index => {
    setState({
      ...state,
      ...(state.tags[index].active = !state.tags[index].active),
    });
  };

  return (
    <View style={styles.container}>
      <BaseTag tags={state.tags} onPress={_handlePressTag} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
