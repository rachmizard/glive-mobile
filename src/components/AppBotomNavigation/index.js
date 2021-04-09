import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {color} from '../../assets';
import AppBottomTabItem from '../AppBottomTabItem';

const AppBotomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
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

export default AppBotomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.surface,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: Dimensions.get('screen').width,
    height: 58,
  },
});
