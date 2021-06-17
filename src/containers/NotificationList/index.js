import React from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Divider, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color, fontConfig } from '../../assets';

const { fontStylesheet } = fontConfig;

const NotificationListContainer = ({
  notifications,
  onRefresh,
  refreshing,
}) => {
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      {notifications.map((notification, index) => (
        <View key={index} style={styles.notificationItem}>
          <View style={styles.notificationItemHeader}>
            <Image
              source={notification.userPict}
              style={styles.notificationUserImg}
            />
            <View style={styles.notificationUserIdentity}>
              <Text style={fontStylesheet.subtitle1}>
                {notification.userName} · {notification.lastHour}
              </Text>
              <Text>
                {notification.mentionTo}{' '}
                {notification.mentions.length ? 'to ' : ''}
                {notification.mentions.length ? (
                  <Text
                    style={{
                      ...fontStylesheet.subtitle2,
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
            <Text style={fontStylesheet.caption}>{notification.content}</Text>

            <View style={styles.notificationAction}>
              <Icon name="comment-outline" size={24} color={color.white} />
              <Icon name="sync" size={24} color={color.white} />
              <Icon name="arrow-up" size={24} color={color.white} />
            </View>
          </View>
          <View style={styles.divider}>
            <Divider style={{ backgroundColor: color.grayLine }} />
          </View>
        </View>
      ))}
    </ScrollView>
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
    marginRight: 8,
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
    marginRight: 40,
    justifyContent: 'center',
  },
  notificationAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  divider: {
    marginVertical: 12,
    marginHorizontal: -8,
  },
});
