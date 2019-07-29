
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
          source={{ uri: `${url}?api-key=qWO5J56rRa4sdwmDlndp4wv5EEAZecAR` }}
          startInLoadingState={true}
          javaScriptEnabled={true}
          thirdPartyCookiesEnabled={true}
          sharedCookiesEnabled={true}
          renderLoading={() => <Loader />}
          scalesPageToFit
        />
      );
    }
  }
 
export default ArticleDetails;