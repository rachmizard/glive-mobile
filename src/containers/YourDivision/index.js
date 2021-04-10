import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Title} from 'react-native-paper';
import {fontConfig} from '../../assets';
import {CardOverlay} from '../../components';

const YourDivisionContainer = ({yourDivisions}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Title style={fontConfig.fontStylesheet.h6}>Your Division</Title>
      </View>
      <ScrollView
        contentContainerStyle={styles.divisionWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {yourDivisions.map((division, index) => (
          <CardOverlay
            key={index}
            colors={['#1A1E23', '#4B32C1']}
            totalUser={division.totalUser}
            img={division.img}
            tagText={division.tagText}
            title={division.title}
          />
        ))}
      </ScrollView>
      <Divider
        style={{marginTop: 8, borderColor: '#4F4F4F', borderWidth: 0.5}}
      />
    </View>
  );
};

export default YourDivisionContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  titleWrapper: {
    marginHorizontal: 8,
  },
  divisionWrapper: {
    flexDirection: 'row',
    marginLeft: 8,
  },
});
