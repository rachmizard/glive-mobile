import React, {Component} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {ChatUser} from '../../components';
import {chatsDm} from '../../mocks';

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    const {userId} = this.props.route.params;
    const findUser = chatsDm.filter(i => i.userId === userId);
    this.setState({chats: findUser[0].chats});
    this.props.navigation.setOptions({title: findUser[0].userName});
  }

  wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  async onRefresh() {
    this.setState({refreshing: true});
    await this.wait(1000).then(() => {
      this.setState({refreshing: false});
      this.setState({chats: []});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatWrapper}>
          <FlatList
            refreshControl={
              <RefreshControl
                onRefresh={() => this.onRefresh()}
                refreshing={this.state.refreshing}
              />
            }
            data={this.state.chats}
            renderItem={({item}) => <ChatUser chat={item} />}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatWrapper: {flex: 1, padding: 8},
});
