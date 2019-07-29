import React from "react";
import { View, ActivityIndicator } from "react-native";
import { headerConfiguration } from './Header';
import { WebView } from 'react-native-webview';

class Loader extends React.Component {
    static navigationOptions = headerConfiguration;
    render() {
      return (
        <View style={{
            justifyContent: 'center',
            alingItems: 'center',
            position: 'absolute',
            zIndex:1,
            top: 0, 
            bottom: 0, 
            left: 0, 
            right: 0, 
            backgroundColor:'rgba(0, 179, 149, 0.35)'}}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
      );
    }
  }
 
export default Loader;