import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ChannelSpeaker from '../ChannelSpeaker';
import {color, fontConfig} from './../../assets';

const Channel = ({data}) => {
  return (
    <View style={styles.channelItem}>
      <Icon
        style={{marginRight: 8}}
        name="volume-high"
        color={color.white}
        size={14}
      />
      <View style={{flex: 1}}>
        <Text style={fontConfig.fontStylesheet.subtitle2}>
          {data.channelTitle} · {data.channelParticipants} Participants
        </Text>
        <Text>Speaker :</Text>
        <FlatList
          data={data.speakers}
          renderItem={({item, index}) => (
            <ChannelSpeaker key={index} speaker={item} />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default Channel;

const styles = StyleSheet.create({
  channelItem: {
    flexDirection: 'row',
  },
});
