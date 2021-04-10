import React, {useEffect} from 'react';
import {useRef} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {color, fontConfig} from './../../assets';

import {stringLimit} from './../../constants/helper';

const GameRoomContainer = ({gameRooms, isLoading, navigation}) => {
  const ref = useRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      ref.current.scrollTo({x: 0, y: 0, animated: true});
    });

    return () => unsubscribe();
  }, [navigation]);

  const LoadingBar = () => (
    <ActivityIndicator
      color={color.white}
      size={30}
      style={{alignItems: 'center'}}
    />
  );

  let renderView = isLoading ? <LoadingBar /> : null;

  if (!isLoading) {
    renderView = (
      <ScrollView
        ref={ref}
        contentContainerStyle={styles.gameRoomWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {gameRooms.map((gameRoom, index) => (
          <View key={index} style={styles.gameRoomItem}>
            <Image source={gameRoom.img} style={styles.gameRoomItemImg} />
            <View style={styles.gameRoomItemTitle}>
              <Text style={styles.gameRoomItemTitleText}>
                {stringLimit(gameRoom.name)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Title style={fontConfig.fontStylesheet.h6}>Gameroom</Title>
      </View>
      {renderView}
    </View>
  );
};

export default GameRoomContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  gameRoomWrapper: {
    flexDirection: 'row',
  },
  gameRoomItem: {
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 16,
  },
  gameRoomItemImg: {
    width: 64,
    height: 64,
    borderRadius: 64 * 2,
  },
  gameRoomItemTitle: {
    marginTop: 8,
    width: 64,
  },
  gameRoomItemTitleText: {
    ...fontConfig.fontStylesheet.overline,
    textAlign: 'center',
  },
});
