
import React from "react";
import { WebView } from 'react-native-webview';
import Loader from './Loader';
import { headerConfiguration } from './Header';

class ArticleDetails extends React.Component {
  static navigationOptions = ({ navigation }) => headerConfiguration(navigation);
    render() {
      const { navigation } = this.props;
      const url = navigation.getParam('url', null);
      return (
        <WebView
          styles={{position: 'relative'}}
          source={{ uri: url }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          renderLoading={() => <Loader />}
          scalesPageToFit
        />
      );
    }
  }
 
export default ArticleDetails;