
import React from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { headerConfiguration } from './Header';
import { WebView } from 'react-native-webview';

class ArticleDetails extends React.Component {
    static navigationOptions = headerConfiguration;
    render() {
      const { navigation } = this.props;
      const url = navigation.getParam('url', null);
      return (
        <WebView
          styles={{position: 'relative'}}
          source={{ uri: url }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          renderLoading={() => <View style={{
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
          </View>}
          scalesPageToFit
        />
      );
    }
  }
 
export default ArticleDetails;