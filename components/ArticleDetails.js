
import React from "react";
import { View, Text, Button } from "react-native";
import { headerConfiguration } from './Header';
import { WebView } from 'react-native-webview';

class ArticleDetails extends React.Component {
    static navigationOptions = headerConfiguration;
    render() {
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const url = navigation.getParam('url', 'some default value');
      return (
        <WebView
          source={{ uri: url }}
          startInLoadingState={false}
          javaScriptEnabled={true}
          thirdPartyCookiesEnabled={true}
          scalesPageToFit
        />
      );
    }
  }
 
export default ArticleDetails;