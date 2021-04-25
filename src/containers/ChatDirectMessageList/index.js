import React from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {color} from '../../assets';
import {ChatItem} from '../../components';

const ChatDirectMessageListContainer = ({
  onNavigateChat,
  chats,
  refreshing,
  onRefreshChat,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={onRefreshChat} refreshing={refreshing} />
        }
        data={chats}
        renderItem={({item}) => (
          <ChatItem onPress={() => onNavigateChat(item.userId)} chat={item} />
        )}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => <Divider style={styles.dividerChat} />}
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
  dividerChat: {
    backgroundColor: color.greyLine,
    marginVertical: 8,
  },
});
