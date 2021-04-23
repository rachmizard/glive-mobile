import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import BgProfileCard from '../../assets/images/bg-profile-card.png';
import UserProfile from '../../assets/images/user-profile-pict.png';
import {fontConfig} from '../../assets';
import {BaseButton} from '../../components';

const ProfileCardContainer = () => {
  const {fontStylesheet} = fontConfig;

  return (
    <ImageBackground
      source={BgProfileCard}
      borderRadius={10}
      borderBottomLeftRadius={10}
      borderBottomRightRadius={10}
      style={styles.cardProfileBg}>
      <View style={styles.cardProfileBody}>
        <View style={styles.cardProfileInfo}>
          <Image source={UserProfile} style={styles.cardProfileImg} />
          <View style={styles.info}>
            <Text style={fontStylesheet.overline}>Post</Text>
            <Text style={fontStylesheet.subtitle1}>2</Text>
          </View>
          <View style={styles.info}>
            <Text style={fontStylesheet.overline}>Upvotes</Text>
            <Text style={fontStylesheet.subtitle1}>524</Text>
          </View>
          <View style={styles.info}>
            <Text style={fontStylesheet.overline}>Mutuals</Text>
            <Text style={fontStylesheet.subtitle1}>34</Text>
          </View>
          <View style={styles.info}>
            <Text style={fontStylesheet.overline}>Division</Text>
            <Text style={fontStylesheet.subtitle1}>4</Text>
          </View>
        </View>
        <View style={styles.cardProfileAction}>
          <View style={styles.userProfile}>
            <Text style={fontStylesheet.subtitle1}>Ashley Doe</Text>
            <Text style={fontStylesheet.caption}>@xypericious</Text>
          </View>
          <BaseButton
            uppercase={false}
            onPress={() => alert('Navigate Edit profile')}
            size="small"
            mode="outlined">
            Edit Profile
          </BaseButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileCardContainer;

const styles = StyleSheet.create({
  cardProfileBg: {
    resizeMode: 'cover',
  },
  cardProfileBody: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  cardProfileImg: {
    flex: 1,
    width: 64,
    height: 64,
    borderRadius: 64 * 2,
  },
  cardProfileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
  cardProfileAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userProfile: {
    flex: 1,
  },
});
