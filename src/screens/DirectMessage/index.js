import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {color} from '../../assets';
import {BaseTextInput} from '../../components';
import {ChatDirectMessageListContainer} from '../../containers';
import {chatsDm} from '../../mocks';

export default class DirectMessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      chatsFiltered: [],
    };
  }

  componentDidMount() {
    this.setState({chats: chatsDm, chatsFiltered: chatsDm});
  }

  _handleRefreshChats() {
    this.setState({chats: chatsDm});
  }

  _handleFilterChats(searchValue) {
    this.setState({
      chatsFiltered: this.state.chats.filter(
        i =>
          i.userFullName.toLowerCase().includes(searchValue.toLowerCase()) ||
          i.userName.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    });
  }

  render() {
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
                style={{alignItems: 'center'}}
                color={color.background}
              />
            }
          />
        </View>
        <ChatDirectMessageListContainer
          onRefreshChat={() => this._handleRefreshChats()}
          chats={this.state.chatsFiltered}
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
