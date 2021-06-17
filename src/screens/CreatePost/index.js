import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';
import { IconButton, Divider } from 'react-native-paper';
import { color, fontConfig } from '../../assets';
import { BaseButton, BaseSliderImage } from '../../components';
import { launchImageLibrary } from 'react-native-image-picker';

class CreatePostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      previewPhotos: [],
    };
  }

  _choosePhotoHandler() {
    const options = {
      noData: true,
      selectionLimit: 0,
    };

    launchImageLibrary(options, response => {
      if (response.assets) {
        this.setState({ previewPhotos: response.assets });
      }

      if (response.didCancel) {
        this.setState({ previewPhotos: null });
      }
    });
  }

  _resetPreviewHandler() {
    this.setState({ previewPhotos: [] });
  }

  componentWillUnmount() {
    this.setState(() => ({ caption: '', previewPhotos: [] }));
  }

  renderPreview() {
    const { previewPhotos } = this.state;

    if (previewPhotos.length > 0) {
      return (
        <React.Fragment>
          <BaseSliderImage images={previewPhotos} />
          <IconButton
            icon="delete"
            color={color.red}
            size={28}
            onPress={() => this._resetPreviewHandler()}
          />
        </React.Fragment>
      );
    }

    return null;
  }

  render() {
    const { caption } = this.state;
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
          {this.renderPreview()}
        </View>
        <View>
          <Divider style={styles.divider} />
          <View style={styles.formActionBody}>
            <IconButton
              icon="image-area"
              color={color.white}
              size={24}
              onPress={() => this._choosePhotoHandler()}
            />
            <View style={styles.postButtonWrapper}>
              <BaseButton
                uppercase={false}
                onPress={() => console.log('Pressed')}>
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
  previewImg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default CreatePostScreen;
