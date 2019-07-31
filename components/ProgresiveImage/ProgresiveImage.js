import React from 'react';
import { View, Animated } from 'react-native';
import { styles } from './ProgressiveImageStyles';

class ProgressiveImage extends React.Component {
  thumbnailAnimated = new Animated.Value(0);

  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 0,
    }).start();
  }

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1, 
    }).start();
  }

  render() {
    const {
      thumbnailSource,
      source,
      style,
      ...props
    } = this.props;

    const { container, imageOverlay } = styles;

    return (
      <View style={container}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={[style, { opacity: this.thumbnailAnimated }]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={1}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImage;