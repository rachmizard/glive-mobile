import React from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import BgProfileCard from '../../assets/images/bg-profile-card.png';
import UserProfile from '../../assets/images/user-profile-pict.png';
import { fontConfig } from '../../assets';
import BaseButton from '../BaseButton';

const ProfileCard = ({ onNavigateEditProfile, user }) => {
  const { overline, subtitle1, caption } = fontConfig.fontStylesheet;

  return (
    <View style={styles.cardProfileWrapper}>
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
              <Text style={overline}>Post</Text>
              <Text style={subtitle1}>{user.post}</Text>
            </View>
            <View style={styles.info}>
              <Text style={overline}>Upvotes</Text>
              <Text style={subtitle1}>{user.upvotes}</Text>
            </View>
            <View style={styles.info}>
              <Text style={overline}>Mutuals</Text>
              <Text style={subtitle1}>{user.mutuals}</Text>
            </View>
            <View style={styles.info}>
              <Text style={overline}>Division</Text>
              <Text style={subtitle1}>{user.division}</Text>
            </View>
          </View>
          <View style={styles.cardProfileAction}>
            <View style={styles.userProfile}>
              <Text style={subtitle1}>{user.name}</Text>
              <Text style={caption}>{user.userName}</Text>
            </View>
            <BaseButton
              uppercase={false}
              onPress={onNavigateEditProfile}
              size="small"
              mode="outlined">
              Edit Profile
            </BaseButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardProfileWrapper: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
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
    justifyContent: 'space-between',
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

ProfileCard.defaultProps = {
  onNavigateEditProfile: () => {},
};

ProfileCard.propTypes = {
  onNavigateEditProfile: PropTypes.func,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};
