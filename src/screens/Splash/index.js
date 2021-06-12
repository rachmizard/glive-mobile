import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { fontConfig } from '../../assets';

const SplashScreen = ({ navigation }) => {
  const authReducer = useSelector(state => state.authReducer);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (authReducer.isLoggedIn) {
        navigation.replace('MainScreen', { screen: 'Home' });
      } else {
        navigation.replace('Auth', { screen: 'SignIn' });
      }
    }, 100);
    return () => {
      clearTimeout(timeout());
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={fontConfig.fontStylesheet.h1}>GLiVE</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
