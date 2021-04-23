import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {ChatUser} from '../../../../components';
import {chats} from '../../../../mocks';

const ChatTab = () => {
  const [state, setState] = useState({
    chats,
    refreshing: false,
  });

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = () => {
    wait(1000).then(() => {
      setState({...state, refreshing: false});
      setState({...state, chats});
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={state.refreshing} onRefresh={onRefresh} />
        }>
        {state.chats.map((chat, index) => (
          <ChatUser key={index} chat={chat} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
  },
});
