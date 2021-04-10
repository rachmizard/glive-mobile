import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import {fontConfig} from '../../assets';
import {CardOverlay} from '../../components';

const YourDivisionContainer = ({navigation, yourDivisions}) => {
  const ref = useRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      ref.current.scrollTo({x: 0, y: 0, animated: true});
    });

    return () => unsubscribe();
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Title style={fontConfig.fontStylesheet.h6}>Your Division</Title>
      </View>
      <ScrollView
        ref={ref}
        contentContainerStyle={styles.divisionWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {yourDivisions.map((division, index) => (
          <CardOverlay
            key={index}
            overlay={true}
            colors={['#1A1E23', '#4B32C1']}
            totalUser={division.totalUser}
            img={division.img}
            tagText={division.tagText}
            title={division.title}
          />
        ))}
      </ScrollView>
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
