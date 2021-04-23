import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Caption, Text, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {color, fontConfig} from '../../assets';
import {BaseButton} from '../../components';

const {fontStylesheet} = fontConfig;

const DivisionInfoContainer = ({data}) => {
  return (
    <>
      <View style={styles.divisionContainer}>
        <LinearGradient
          style={styles.divisionBg}
          colors={['#00048F', '#825EF5']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
        />
        <View style={styles.divisionWrapper}>
          <Image source={data.img} style={styles.divisionImg} />
          <View style={styles.divisionInteractionWrapper}>
            <View>
              <Text style={fontStylesheet.subtitle1}>{data.title}</Text>
              <View style={styles.divisionInfoWrapper}>
                <View style={styles.divisionInfoIcon}>
                  <Icon name="account-multiple" color={color.white} size={14} />
                  <Text style={styles.divisionIconText}>{data.totalUser}</Text>
                </View>
                <Text style={{color: color.yellow}}>{data.tagText}</Text>
              </View>
            </View>
            <View style={styles.buttonInfoJoin}>
              <BaseButton
                uppercase={false}
                onPress={() => alert('Join')}
                size="small"
                mode="contained">
                Join
              </BaseButton>
            </View>
          </View>
        </View>
        <View style={styles.divisionInfoDescription}>
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
  divisionContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  divisionWrapper: {
    position: 'relative',
    bottom: 30,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  divisionInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divisionInfoIcon: {
    flexDirection: 'row',
  },
  divisionIconText: {
    marginLeft: 2,
  },
  divisionImg: {
    width: 80,
    height: 80,
  },
  divisionInteractionWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  divisionInfoDescription: {marginHorizontal: 16, marginTop: -30},
  buttonInfoJoin: {width: 88},
});
