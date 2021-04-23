import React, {Component} from 'react';
import {Alert, StyleSheet, SafeAreaView} from 'react-native';
import {BaseTag} from '../../components';
import {PostContainer} from '../../containers';
import {tags, posts} from '../../mocks';

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

  _handlePressTag = index => {
    const {tags} = this.state;
    const copyTags = [...tags];
    copyTags[index].active = !copyTags[index].active;
    this.setState(state => [...state.tags, copyTags]);
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
    const {postContents} = this.state;
    const find = postContents.find(i => i.id === id);
    if (find) {
      find.isRetweeted = !find.isRetweeted;
      this.setState(state => [...state.postContents, find]);
    }
  };

  _handlePressUpvote = ({id}) => {
    const {postContents} = this.state;
    const find = postContents.find(i => i.id === id);
    if (find) {
      find.isUpvote = !find.isUpvote;
      this.setState(state => [...state.postContents, find]);
    }
  };

  _handleNavigatePostDetail = ({id}) => {
    Alert.alert('Navigate', `Pressed post id ${id}`);
  };

  fetchData() {
    this.setState({tags});
    this.setState({postContents: posts});
  }

  render() {
    const {tags, refreshing, postContents} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <BaseTag tags={tags} onPress={this._handlePressTag} />
        <PostContainer
          refreshing={refreshing}
          onRefresh={this.onRefresh}
          postContents={postContents}
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
