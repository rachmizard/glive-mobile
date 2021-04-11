import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Headline, Subheading} from 'react-native-paper';
import {fontConfig} from '../../assets';
import {BaseButton, ButtonSocial} from '../../components';
import IconStartUpOutline from './../../assets/images/icon-startup-outline.png';

const SuccessSignUpScreen = ({navigation}) => {
  const _handleTakeHome = () =>
    navigation.reset({index: 0, routes: [{name: 'MainScreen'}]});

  return (
    <View style={styles.container}>
      <View style={styles.successHeadingTextWrapper}>
        <Headline style={fontConfig.fontStylesheet.h5}>
          Successfully Registered
        </Headline>
        <Subheading style={fontConfig.fontStylesheet.body1}>
          One more step though, connect to discord to unlock more features
          (optional)
        </Subheading>
      </View>
      <View style={styles.startUpWrapper}>
        <Image source={IconStartUpOutline} style={styles.startUpImg} />
      </View>
      <View style={styles.buttonWrapper}>
        <View style={{marginBottom: 16}}>
          <ButtonSocial
            social="discord"
            uppercase={false}
            onPress={() => console.log('Hello')}>
            Continue Discord Account
          </ButtonSocial>
        </View>
        <View style={{marginBottom: 16}}>
          <BaseButton
            mode="contained"
            uppercase={false}
            onPress={_handleTakeHome}>
            Take me "Home"
          </BaseButton>
        </View>
      </View>
    </View>
  );
};

export default SuccessSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  successHeadingTextWrapper: {
    marginTop: 24,
  },
  startUpWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startUpImg: {
    width: 163,
    height: 169,
  },
  buttonWrapper: {
    flexDirection: 'column',
  },
});
