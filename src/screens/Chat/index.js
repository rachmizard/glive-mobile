import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {color} from '../../assets';
import {BaseTextInput, ChatUser} from '../../components';
import {chatsDm} from '../../mocks';
import userPicture from './../../assets/images/user-1.png';

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      user: {
        userImg: userPicture,
        userName: '@emmastone',
      },
      chatText: '',
      refreshing: false,
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    const {userId} = this.props.route.params;
    const findUser = chatsDm.find(i => i.userId === userId);
    this.setState({chats: findUser.chats});
    this.props.navigation.setOptions({title: findUser.userName});
  }

  wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  async onRefresh() {
    this.setState({refreshing: true});
    await this.wait(1000).then(() => {
      const {userId} = this.props.route.params;
      const findUser = chatsDm.find(i => i.userId === userId);
      this.setState({refreshing: false});
      this.setState({chats: findUser.chats});
    });
  }

  _handleSendMessage() {
    if (!this.state.chatText) {
      return;
    }
    const payload = {
      ...this.state.user,
      chatText: this.state.chatText,
      lastChat: '2s',
    };
    this.setState({chats: [...this.state.chats, payload]});
    this.setState({chatText: ''});
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.ref.current.scrollToEnd({animated: true});
  }

  onChangeMessage(text) {
    this.setState({
      chatText: text,
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.chatWrapper}>
          <ScrollView
            ref={this.ref}
            refreshControl={
              <RefreshControl
                onRefresh={() => this.onRefresh()}
                refreshing={this.state.refreshing}
              />
            }>
            {this.state.chats &&
              this.state.chats.map((item, key) => (
                <ChatUser key={key} chat={item} />
              ))}
          </ScrollView>
        </View>
        <View style={styles.textInputWrapper}>
          <BaseTextInput
            onChangeText={e => {
              this.onChangeMessage(e);
            }}
            mode="flat"
            height={46}
            placeholder="Start a message .."
            roundness={0}
            iconPosition="right"
            value={this.state.chatText}
            icon={
              <TextInput.Icon
                onPress={() => this._handleSendMessage()}
                name={'send'}
                color={color.greyLine}
              />
            }
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chatWrapper: {
    flex: 1,
    padding: 8,
  },
  textInputWrapper: {
    marginBottom: 8,
  },
});
