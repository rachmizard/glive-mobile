import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseTag} from '../../components';
import {PostContainer} from '../../containers';
import {tags} from './../../mocks';

const HomeScreen = () => {
  const [state, setState] = useState({
    tags: tags,
  });

  const _handlePressTag = index => {
    setState({
      ...state,
      ...(state.tags[index].active = !state.tags[index].active),
    });
  };

  return (
    <>
      <View style={styles.container}>
        <BaseTag tags={state.tags} onPress={_handlePressTag} />
        <PostContainer />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
