import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Platform, Keyboard } from 'react-native';
import { useAndroidBackHandler } from 'react-navigation-backhandler';
import { color } from '../../assets';
import AppBottomSheet from '../AppBottomSheet';
import AppBottomTabItem from '../AppBottomTabItem';
import GameRoomBottomSheet from '../GameRoomUserControl';
import GameRoomControl from '../GameRoomControl';

const AppBotomNavigation = ({ state, descriptors, navigation }) => {
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [snap, setSnap] = useState(0);
  const sheetRef = useRef(snap);

  useAndroidBackHandler(() => {
    if (snap === 0) {
      return false;
    }
    sheetRef.current.snapTo(0);
    setSnap(0);
    return true;
  });

  useEffect(() => {
    let keyboardEventListener = [];
    if (Platform.OS === 'android') {
      keyboardEventListener = [
        Keyboard.addListener('keyboardDidShow', () => setShowKeyboard(false)),
        Keyboard.addListener('keyboardDidHide', () => setShowKeyboard(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListener &&
          keyboardEventListener.forEach(eventListener =>
            eventListener.remove(),
          );
      }
    };
  });

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const _handlerOpenGameControl = () => {
    sheetRef.current.snapTo(1);
    setSnap(1);
  };

  const renderBottomNav = () => {
    if (Platform.OS === 'android' && !showKeyboard) {
      return null;
    }
    return (
      <View style={styles.appBottomNavContainer}>
        <GameRoomControl onPressGameControl={_handlerOpenGameControl} />
        <View style={styles.appBotomNavWrapper}>
          {state.routes.map((route, i) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === i;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <AppBottomTabItem
                key={i}
                options={options}
                onPress={onPress}
                onLongPress={onLongPress}
                isFocused={isFocused}
                label={label}
              />
            );
          })}
        </View>
        <AppBottomSheet
          sheetRef={sheetRef}
          header={() => <GameRoomControl />}
          renderContent={() => (
            <View style={styles.appBottomSheetChild}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
                <GameRoomBottomSheet key={i} />
              ))}
            </View>
          )}
        />
      </View>
    );
  };

  return renderBottomNav();
};

export default AppBotomNavigation;

const styles = StyleSheet.create({
  appBottomNavContainer: {
    flexDirection: 'column',
  },
  appBotomNavWrapper: {
    flexDirection: 'row',
    backgroundColor: color.surface,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 10,
    height: 58,
  },
  appBottomSheetChild: {
    backgroundColor: color.surface,
    height: 650,
  },
});
