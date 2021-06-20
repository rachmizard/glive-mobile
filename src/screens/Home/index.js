import React, { Component } from 'react';
import { Alert, StyleSheet, SafeAreaView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { connect } from 'react-redux';
import { color } from '../../assets';
import { BaseTag } from '../../components';
import { PostContainer } from '../../containers';
import { tags } from '../../mocks';
import { getPostAsync } from '../../redux/postReducer/actions';

class HomeScreen extends Component {
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.postReducer.isUploading !== this.props.postReducer.isUploading
    ) {
      this.props.getPosts();
    }
  }

  _handlePressTag = index => {
    const { tags } = this.state;
    const copyTags = [...tags];
    copyTags[index].active = !copyTags[index].active;
    this.setState(state => [...state.tags, copyTags]);
  };

  wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.wait(1000).then(() => {
      this.setState({ refreshing: false });
      this.fetchData();
    });
  };

  _handlePressComment = ({ id }) => {
    Alert.alert('Comment', `Pressed post id ${id}`);
  };

  _handlePressRetweet = ({ id }) => {
    const { postContents } = this.state;
    const find = postContents.find(i => i.id === id);
    if (find) {
      find.isRetweeted = !find.isRetweeted;
      this.setState(state => [...state.postContents, find]);
    }
  };

  _handlePressUpvote = ({ id }) => {
    const { postContents } = this.state;
    const find = postContents.find(i => i.id === id);
    if (find) {
      find.isUpvote = !find.isUpvote;
      this.setState(state => [...state.postContents, find]);
    }
  };

  _handleNavigatePostDetail = ({ id }) => {
    Alert.alert('Navigate', `Feature is not available`);
  };

  fetchData() {
    this.setState({ tags });
    this.props.getPosts();
  }

  render() {
    const { tags, refreshing, postContents } = this.state;
    const { postReducer } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        {postReducer.isUploading && (
          <ProgressBar progress={postReducer.transferred} color={color.blue} />
        )}
        {/* <BaseTag tags={tags} onPress={this._handlePressTag} /> */}
        <PostContainer
          refreshing={refreshing}
          onRefresh={this.onRefresh}
          postContents={postReducer.posts}
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

const mapStateToProps = state => ({
  postReducer: state.postReducer,
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
