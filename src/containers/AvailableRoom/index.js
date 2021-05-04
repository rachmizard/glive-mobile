import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import { fontConfig } from '../../assets';
import { ListRoom } from '../../components';

const AvailableRoomContainer = ({ rooms }) => {
  const [radioValue, setRadioValue] = useState('');

  const _handleCheckedRoom = value => {
    setRadioValue(value);
  };

  return (
    <>
      <Text
        style={{
          ...fontConfig.fontStylesheet.subtitle2,
          ...{ marginBottom: 8 },
        }}>
        Available Room
      </Text>
      {rooms.map((channel, index) => (
        <ListRoom
          key={index}
          name={channel.name}
          checked={channel.name === radioValue}
          onPress={() => _handleCheckedRoom(channel.name)}
        />
      ))}
    </>
  );
};

export default AvailableRoomContainer;
