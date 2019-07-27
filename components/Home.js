import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/actions';

class HomeScreen extends React.Component {
    componentWillMount() {
      this.props.getArticles();
    }
    
    render() {
    console.log(this.props.articles);
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details', {
              itemId: 86,
              url: 'http:\\www.google.com'
            })}
          />
        </View>
      );
    }
  }


const mapStateToProps = state => {
    return {
      articles: state.articles
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getArticles: () => {
        dispatch(fetchArticles())
      }
    }
  }
  
 
  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);