import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Platform, Keyboard} from 'react-native';
import {color} from '../../assets';
import AppBottomTabItem from '../AppBottomTabItem';

const AppBotomNavigation = ({state, descriptors, navigation}) => {
  const [showKeyboard, setShowKeyboard] = useState(true);

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
  }, []);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const renderBottomNav = () => {
    if (Platform.OS === 'android' && !showKeyboard) {
      return null;
    }
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

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
              key={index}
              options={options}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              label={label}
            />
          );
        })}
      </View>
    );
  };

  return renderBottomNav();
};

export default AppBotomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.surface,
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 10,
    height: 58,
  },
});
