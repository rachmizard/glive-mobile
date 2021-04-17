import React from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {color} from '../../assets';
import {ChatItem} from '../../components';

const ChatDirectMessageListContainer = ({chats, onRefreshChat}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      onRefreshChat();
      setRefreshing(false);
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
        data={chats}
        renderItem={({item}) => (
          <ChatItem
            onPress={() => console.log('Navigate to chat user')}
            chat={item}
          />
        )}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => (
          <Divider
            style={{backgroundColor: color.greyLine, marginVertical: 8}}
          />
        )}
      />
    </View>
  );
};

export default ChatDirectMessageListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
});
