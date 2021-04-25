import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontConfig} from '../../assets';
import {BaseTextInput, CardOverlay} from '../../components';

const ExploreDivisionContainer = ({onNavigateDivision, exploreDivisions}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarWrapper}>
        <BaseTextInput
          mode="outlined"
          placeholder="Search..."
          placeHolderColor={color.black}
          text={color.background}
          textInputBackgroundColor={color.white}
          textInputColor={color.background}
          focusColor={color.black}
          iconPosition="right"
          onChangeText={() => console.log('test')}
          icon={
            <TextInput.Icon
              name={() => <Icon name="magnify" size={24} color={color.black} />}
            />
          }
        />
      </View>
      <View style={styles.exploreWrapper}>
        <View style={styles.exploreTitle}>
          <Title style={fontConfig.fontStylesheet.h6}>Explore Division</Title>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.exploreList}>
          {exploreDivisions.map((explore, index) => (
            <CardOverlay
              key={index}
              img={explore.img}
              title={explore.title}
              totalUser={explore.totalUser}
              tagText={explore.tagText}
              touchable={false}
              overlay={true}
              onPress={() => onNavigateDivision(explore)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ExploreDivisionContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarWrapper: {
    marginHorizontal: 8,
  },
  exploreWrapper: {
    marginVertical: 12,
  },
  exploreTitle: {
    marginHorizontal: 8,
  },
  exploreList: {
    flexDirection: 'row',
  },
});
