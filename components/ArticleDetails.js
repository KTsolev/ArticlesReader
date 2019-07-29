
import React from "react";
import { WebView } from 'react-native-webview';
import Loader from './Loader';
import { headerConfiguration } from './Header';
import { API_KEY } from '../config';

class ArticleDetails extends React.Component {
  static navigationOptions = ({ navigation }) => headerConfiguration(navigation);
    render() {
      const { navigation } = this.props;
      const url = navigation.getParam('url', null);
      return (
        <WebView
          styles={{position: 'relative'}}
          source={{ uri: `${url}?&source='New York Times'` }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          renderLoading={() => <Loader />}
          scalesPageToFit
        />
      );
    }
  }
 
export default ArticleDetails;