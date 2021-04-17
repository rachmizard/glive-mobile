import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Caption, Text, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontConfig} from '../../assets';
import {BaseButton} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

const {fontStylesheet} = fontConfig;

const DivisionInfoContainer = ({data}) => {
  return (
    <>
      <View style={styles.divisionWrapper}>
        <LinearGradient
          style={styles.divisionBg}
          colors={['#00048F', '#825EF5']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
        />
        <View style={styles.divisionInfo}>
          <Image source={data.img} style={styles.divisionPictureInfo} />
          <View style={styles.divisionInteractionWrapper}>
            <View>
              <Text style={fontStylesheet.subtitle1}>{data.title}</Text>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  style={{marginRight: 8}}
                  name="account-multiple"
                  color={color.white}
                  size={14}
                />
                <Text style={{marginRight: 8}}>{data.totalUser}</Text>
                <Text style={{marginRight: 8, color: color.yellow}}>
                  {data.tagText}
                </Text>
              </View>
            </View>
            <View style={{width: 88}}>
              <BaseButton uppercase={false} size="small" mode="contained">
                Join
              </BaseButton>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 16, marginTop: -30}}>
          <Title style={fontStylesheet.subtitle2}>Description</Title>
          <Caption style={{...fontStylesheet.caption, ...{color: color.white}}}>
            {data.description}
          </Caption>
        </View>
      </View>
    </>
  );
};

export default DivisionInfoContainer;

const styles = StyleSheet.create({
  divisionBg: {
    height: 129,
    resizeMode: 'cover',
  },
  divisionWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  divisionInfo: {
    position: 'relative',
    bottom: 30,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  divisionPictureInfo: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  divisionInteractionWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
});
