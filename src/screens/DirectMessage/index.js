import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { color } from '../../assets';
import { BaseTextInput } from '../../components';
import { ChatDirectMessageListContainer } from '../../containers';
import { chatsDm } from '../../mocks';

export default class DirectMessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      chatsFiltered: [],
      refreshing: false,
    };

    this.onRefresh = this.onRefresh.bind(this);
    this._handleNavigateChatScreen = this._handleNavigateChatScreen.bind(this);
    this._handleRefreshChats = this._handleRefreshChats.bind(this);
  }

  componentDidMount() {
    this._handleRefreshChats();
  }

  onRefresh() {
    this.setState({ refreshing: true });
    this.wait(1000).then(() => {
      this._handleRefreshChats();
      this.setState({ refreshing: false });
    });
  }

  wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  _handleNavigateChatScreen = userId => {
    const { navigation } = this.props;
    navigation.navigate('Chat', { userId });
  };

  _handleRefreshChats() {
    this.setState({ chats: chatsDm, chatsFiltered: chatsDm });
  }

  _handleFilterChats(searchValue) {
    this.setState(state => ({
      chatsFiltered: state.chats.filter(
        i =>
          i.userFullName.toLowerCase().includes(searchValue.toLowerCase()) ||
          i.userName.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    }));
  }

  render() {
    const { refreshing, chatsFiltered } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchDmWrapper}>
          <BaseTextInput
            height={36}
            mode="outlined"
            placeholder="Search..."
            placeHolderColor={color.black}
            text={color.background}
            textInputBackgroundColor={color.white}
            textInputColor={color.background}
            focusColor={color.black}
            iconPosition="right"
            roundness={8}
            onChangeText={text => {
              this._handleFilterChats(text);
            }}
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
          refreshing={refreshing}
          onNavigateChat={this._handleNavigateChatScreen}
          onRefreshChat={this._handleRefreshChats}
          chats={chatsFiltered}
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
