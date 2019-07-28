
import React from "react";
import { View, Text, Button } from "react-native";
import { headerConfiguration } from './Header';

class ArticleDetails extends React.Component {
    static navigationOptions = headerConfiguration;
    render() {
      const { navigation } = this.props;
      const itemId = navigation.getParam('itemId', 'NO-ID');
      const url = navigation.getParam('url', 'some default value');
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Text>{url}</Text>
          <Text>{itemId}</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }
 
export default ArticleDetails;