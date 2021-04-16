import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {fontConfig} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Auth', {screen: 'SignIn'});
    }, 2000);
    return () => {
      clearTimeout(timeout());
    };
  }, []);

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
