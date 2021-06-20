import React from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import BgProfileCard from '../../assets/images/bg-profile-card.png';
import { fontConfig } from '../../assets';
import BaseButton from '../BaseButton';

const ProfileCard = ({ onNavigateEditProfile, user }) => {
  const { overline, subtitle1, caption } = fontConfig.fontStylesheet;

  return (
    <View style={styles.cardProfileWrapper}>
      <ImageBackground
        source={{ uri: "https://images.ctfassets.net/hrltx12pl8hq/8MpEm5OxWXiNqLvWzCYpW/24f02cfe391aa8f25845de858982d449/shutterstock_749707636__1__copy.jpg?fit=fill&w=840&h=350" }}
        borderRadius={10}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        style={styles.cardProfileBg}>
        <View style={styles.cardProfileBody}>
          <View style={styles.cardProfileInfo}>
            <Image
              source={{ uri: user.profileImageUrl }}
              style={styles.cardProfileImg}
            />
            <View style={styles.info}>
              <Text style={overline}>Post</Text>
              <Text style={subtitle1}>{user.postCount}</Text>
            </View>
            <View style={styles.info}>
              <Text style={overline}>Upvotes</Text>
              <Text style={subtitle1}>{user.likersCount}</Text>
            </View>
            <View style={styles.info}>
              <Text style={overline}>Mutuals</Text>
              <Text style={subtitle1}>{user.friendsCount}</Text>
            </View>
            <View style={styles.info}>
              <Text style={overline}>Division</Text>
              <Text style={subtitle1}>{user.divisionCount}</Text>
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
    resizeMode: 'contain'
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
