import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';
import { IconButton, Divider, ProgressBar } from 'react-native-paper';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseSliderImage } from '../../components';
import { launchImageLibrary } from 'react-native-image-picker';
import { createPostAsync } from '../../redux/postReducer/actions';
import { connect } from 'react-redux';

class CreatePostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      media: [],
    };
  }

  _choosePhotoHandler() {
    const options = {
      noData: true,
      selectionLimit: 0,
    };

    launchImageLibrary(options, response => {
      if (response.assets) {
        this.setState({ media: response.assets });
      }

      if (response.didCancel) {
        this.setState({ media: [] });
      }
    });
  }

  _submitPostHandler() {
    this.props.createPost(this.state);
  }

  _resetPreviewHandler() {
    this.setState({ media: [] });
  }

  _resetState() {
    this.setState({ caption: '', media: [] });
  }

  componentWillUnmount() {
    this._resetState();
  }

  _renderPreview() {
    const { media } = this.state;
    const { postReducer } = this.props;

    if (media.length > 0) {
      return (
        <View style={styles.previewContent}>
          <BaseSliderImage images={media} />
          {postReducer.isUploading ? null : (
            <IconButton
              icon="delete"
              color={color.red}
              size={28}
              onPress={() => this._resetPreviewHandler()}
            />
          )}
        </View>
      );
    }

    return null;
  }

  _renderProgressbar() {
    const { postReducer } = this.props;

    if (postReducer.isUploading) {
      return (
        <ProgressBar progress={postReducer.transferred} color={color.blue} />
      );
    }
    return null;
  }

  render() {
    const { caption, media } = this.state;
    const { postReducer } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <TextInput
            placeholder="What's happening?"
            placeholderTextColor={color.white}
            style={styles.textArea}
            multiline={true}
            value={caption}
            onChangeText={text => this.setState({ caption: text })}
          />
          <View style={styles.previewWrapper}>
            {this._renderPreview()}
            {this._renderProgressbar()}
          </View>
        </View>
        <View>
          <Divider style={styles.divider} />
          <View style={styles.formActionBody}>
            <IconButton
              disabled={postReducer.isUploading}
              icon="image-area"
              color={color.white}
              size={24}
              onPress={() => this._choosePhotoHandler()}
            />
            <View style={styles.postButtonWrapper}>
              <BaseButton
                disabled={
                  postReducer.isUploading ||
                  (caption === '' && media.length === 0)
                }
                uppercase={false}
                onPress={() => this._submitPostHandler()}>
                Post Now
              </BaseButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');

const SCREEN_WIDTH = width * 0.9;
const SCREEN_HEIGHT = width * 0.9;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  textArea: {
    ...fontConfig.fontDefault.android.regular,
    paddingVertical: 25,
    justifyContent: 'flex-start',
    color: color.white,
    ...fontConfig.fontStylesheet.body1,
  },
  divider: { backgroundColor: color.grayDark },
  formActionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  postButtonWrapper: { width: 150 },
  previewWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  previewContent: {
    marginBottom: 20,
  },
  previewImg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

const mapStateToProps = state => ({
  postReducer: state.postReducer,
});

const mapDispatchToProps = dispatch => ({
  createPost: payload => dispatch(createPostAsync(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);
