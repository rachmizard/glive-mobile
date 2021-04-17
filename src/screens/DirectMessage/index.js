import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {color} from '../../assets';
import {BaseTextInput} from '../../components';
import {ChatDirectMessageListContainer} from '../../containers';
import {chatsDm} from '../../mocks';

export default class DirectMessageScreen extends Component {
  state = {
    chats: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({...this.state, chats: chatsDm});
  }

  _handleRefreshChats() {
    this.setState({...this.state, chats: chatsDm});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchDmWrapper}>
          <BaseTextInput
            mode="outlined"
            placeholder="Search..."
            placeHolderColor={color.black}
            text={color.background}
            textInputBackgroundColor={color.white}
            textInputColor={color.background}
            focusColor={color.black}
            iconPosition="right"
            icon={
              <TextInput.Icon
                name="magnify"
                size={24}
                color={color.background}
              />
            }
          />
        </View>
        <ChatDirectMessageListContainer
          onRefreshChat={() => this._handleRefreshChats()}
          chats={this.state.chats}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchDmWrapper: {
    paddingHorizontal: 8,
  },
});
