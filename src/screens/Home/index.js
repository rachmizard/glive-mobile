import React, {Component} from 'react';
import {Alert, StyleSheet, SafeAreaView} from 'react-native';
import {BaseTag} from '../../components';
import {PostContainer} from '../../containers';
import {tags, posts} from './../../mocks';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      postContents: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({tags: tags});
    this.setState({postContents: posts});
  }

  _handlePressTag = index => {
    this.setState({
      ...this.state,
      ...(this.state.tags[index].active = !this.state.tags[index].active),
    });
  };

  wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  onRefresh = () => {
    this.setState({refreshing: true});
    this.wait(1000).then(() => {
      this.setState({refreshing: false});
      this.setState({postContents: posts});
    });
  };

  _handlePressComment = ({id}) => {
    Alert.alert('Comment', `Pressed post id ${id}`);
  };

  _handlePressRetweet = ({id}) => {
    const find = this.state.postContents.find(i => i.id === id);
    if (find) {
      find.isRetweeted = !find.isRetweeted;
      this.setState(state => [...state.postContents, find]);
    }
  };

  _handlePressUpvote = ({id}) => {
    const find = this.state.postContents.find(i => i.id === id);
    if (find) {
      find.isUpvote = !find.isUpvote;
      this.setState(state => [...state.postContents, find]);
    }
  };

  _handleNavigatePostDetail = ({id}) => {
    Alert.alert('Navigate', `Pressed post id ${id}`);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BaseTag tags={this.state.tags} onPress={this._handlePressTag} />
        <PostContainer
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          postContents={this.state.postContents}
          onPressDetailPost={this._handleNavigatePostDetail}
          onPressComment={this._handlePressComment}
          onPressRetweet={this._handlePressRetweet}
          onPressUpvote={this._handlePressUpvote}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
