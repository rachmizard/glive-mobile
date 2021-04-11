import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontConfig} from '../../assets';

const NotificationListContainer = ({notifications}) => {
  return (
    <View style={styles.container}>
      {notifications.map((notification, index) => (
        <View key={notification.id} style={styles.notificationItem}>
          <View style={styles.notificationItemHeader}>
            <View style={{marginRight: 8}}>
              <Image
                source={notification.userPict}
                style={styles.notificationUserImg}
              />
            </View>
            <View style={styles.notificationUserIdentity}>
              <Text style={fontConfig.fontStylesheet.subtitle1}>
                {notification.userName} · {notification.lastHour}
              </Text>
              <Text>
                {notification.mentionTo}{' '}
                {notification.mentions.length ? 'to ' : ''}
                {notification.mentions.length ? (
                  <Text
                    style={{
                      ...fontConfig.fontStylesheet.subtitle2,
                      color: color.primaryLight,
                    }}>
                    {notification.mentions && notification.mentions.join(', ')}
                  </Text>
                ) : (
                  ''
                )}
              </Text>
            </View>
            <Icon
              color={color.black}
              size={16}
              style={styles.dotsVertical}
              name="dots-vertical"
            />
          </View>
          <View style={styles.notificationContent}>
            <Text style={fontConfig.fontStylesheet.caption}>
              {notification.content}
            </Text>
          </View>
          <View style={styles.notificationAction}>
            <Icon name="comment-outline" size={24} color={color.white} />
            <Icon
              style={{marginHorizontal: 32}}
              name="sync"
              size={24}
              color={color.white}
            />
            <Icon name="arrow-up" size={24} color={color.white} />
          </View>
          <View style={styles.divider}>
            <Divider style={{backgroundColor: color.greyLine}} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default NotificationListContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  notificationItem: {
    marginTop: 8,
  },
  notificationItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  notificationUserImg: {
    height: 38,
    width: 38,
    borderRadius: 38 * 2,
  },
  notificationUserIdentity: {
    flex: 1,
    alignSelf: 'stretch',
  },
  dotsVertical: {
    padding: 1,
    backgroundColor: color.white,
    borderRadius: 8 * 2,
  },
  notificationContent: {
    marginTop: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  notificationAction: {
    flexDirection: 'row',
    marginTop: 12,
  },
  divider: {
    marginVertical: 12,
    marginHorizontal: -8,
  },
});
