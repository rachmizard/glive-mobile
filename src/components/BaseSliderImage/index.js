import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import { color } from '../../assets';

const { width } = Dimensions.get('window');

const SCREEN_WIDTH = width * 0.9;
const SCREEN_HEIGHT = width * 0.9;

const BaseSliderImage = ({
  images,
  activeColor,
  unactiveColor,
  baseUriImage,
}) => {
  const [active, setActive] = useState(0);

  const _handleChangeScroll = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );

    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.sliderWrapper}>
      <ScrollView
        onScroll={e => _handleChangeScroll(e)}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        {images.map((image, i) => {
          let source = null;

          if (baseUriImage) {
            source = { uri: image };
          } else {
            source = image;
          }

          return <Image key={i} source={source} style={styles.sliderImg} />;
        })}
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {images.length > 1 &&
          images.map((i, k) => (
            <Text
              key={k}
              style={[
                styles.paginationText,
                { color: k === active ? activeColor : unactiveColor },
              ]}>
              ⬤
            </Text>
          ))}
      </View>
    </View>
  );
};

export default BaseSliderImage;

const styles = StyleSheet.create({
  sliderWrapper: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  sliderImg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  paginationWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  paginationText: {
    margin: 4,
  },
});

BaseSliderImage.defaultProps = {
  images: [],
  activeColor: color.white,
  unactiveColor: color.grayDark,
  baseUriImage: false,
};

BaseSliderImage.propTypes = {
  images: PropTypes.arrayOf(Array),
  activeColor: PropTypes.string,
  baseUriImage: PropTypes.bool,
  unactiveColor: PropTypes.string,
};
