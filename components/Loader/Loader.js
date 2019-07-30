import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { headerConfiguration } from '../Header/Header';
import { styles } from './LoaderStyles';

class Loader extends React.Component {
    static navigationOptions = headerConfiguration;
    render() {
      const { container } = styles;
      return (
        <View style={container}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    }
  }
 
export default Loader;