import React, {useRef, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, TextInput, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, fontConfig} from '../../assets';
import {CardOverlay} from '../../components';

const ExploreDivisionContainer = ({navigation, exploreDivisions}) => {
  const ref = useRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      ref.current.scrollTo({x: 0, y: 0, animated: true});
    });

    return () => unsubscribe();
  });

  const SearchBar = () => (
    <View style={styles.searchBarWrapper}>
      <TextInput
        mode="outlined"
        placeholder="Search..."
        theme={{
          colors: {
            primary: color.black,
            background: color.white,
            text: color.background,
          },
        }}
        right={
          <TextInput.Icon
            name={() => <Icon name="magnify" size={24} color={color.black} />}
          />
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.exploreWrapper}>
        <View style={styles.exploreTitle}>
          <Title style={fontConfig.fontStylesheet.h6}>Explore Division</Title>
        </View>
        <ScrollView
          ref={ref}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.exploreList}>
          {exploreDivisions.map((explore, index) => (
            <CardOverlay
              key={index}
              img={explore.img}
              title={explore.title}
              tagText={explore.tagText}
              touchable={false}
              overlay={true}
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
