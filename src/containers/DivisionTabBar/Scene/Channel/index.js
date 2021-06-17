import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { color } from '../../../../assets';
import { Channel } from '../../../../components';
import { channels } from '../../../../mocks';

const ChannelTab = () => {
  const [state, setState] = useState({
    channels,
    refreshing: false,
  });

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = () => {
    setState({ ...state, refreshing: true });
    wait(1000).then(() => {
      setState({ ...state, refreshing: false });
      setState({ ...state, channels });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.channelsWrapper}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={state.refreshing}
              onRefresh={onRefresh}
            />
          }
          data={state.channels}
          renderItem={({ item, index }) => <Channel key={index} data={item} />}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        />
      </View>
    </View>
  );
};

export default ChannelTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  channelsWrapper: {
    marginHorizontal: 8,
  },
  channelItem: {
    flexDirection: 'row',
  },
  divider: { backgroundColor: color.grayLine, marginVertical: 8 },
});
