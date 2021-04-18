import React from 'react';
import PropTypes from 'prop-types';
import {Text, RadioButton} from 'react-native-paper';
import {color, fontConfig, theme} from '../../assets';
import {StyleSheet, View} from 'react-native';

const {roundness} = theme;
const {fontStylesheet} = fontConfig;

const ListRoom = ({name, checked, onPress}) => {
  return (
    <View style={styles.availableRooms}>
      <View style={styles.availableRoomItem}>
        <Text style={fontStylesheet.body2}>{name}</Text>
        <RadioButton
          onPress={onPress}
          value="first"
          uncheckedColor={color.white}
          status={checked ? 'checked' : 'unchecked'}
        />
      </View>
    </View>
  );
};

export default ListRoom;

const styles = StyleSheet.create({
  availableRooms: {
    flexDirection: 'column',
  },
  availableRoomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.brown,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: roundness,
    elevation: 8,
  },
});

ListRoom.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onPress: PropTypes.func,
};
