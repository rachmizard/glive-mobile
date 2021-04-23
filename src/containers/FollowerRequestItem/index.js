import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {color} from '../../assets';

const FollowerRequestItemContainer = ({data, onPressAccept, onPressReject}) => {
  return (
    <View style={styles.followerWrapper}>
      <View style={styles.followerInfo}>
        <Image source={data.userImg} style={styles.followerImg} />
        <Text>{data.userName}</Text>
      </View>
      <View style={styles.followerAction}>
        <IconButton
          icon="check-circle-outline"
          color={color.white}
          size={28}
          onPress={onPressAccept}
        />
        <IconButton
          icon="close-circle-outline"
          color={color.white}
          size={28}
          onPress={onPressReject}
        />
      </View>
    </View>
  );
};

export default FollowerRequestItemContainer;

const styles = StyleSheet.create({
  followerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  followerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followerImg: {
    width: 36,
    height: 36,
    borderRadius: 36 * 2,
    marginRight: 8,
  },
  followerAction: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
