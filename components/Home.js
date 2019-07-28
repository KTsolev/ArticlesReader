import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/actions';
import ArticleTile from './ArticleTile';
import { Icon } from 'react-native-elements'
import { headerConfiguration } from './Header';

class HomeScreen extends React.Component {
  static navigationOptions = headerConfiguration;
    state = {
        articles: this.props.articles,
        isLoading: this.props.isLoading,
        error: this.props.error,
      };
      
    componentWillMount() {
        this.props.getArticles();
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.articles !== this.props.articles) {
            this.setState({articles: this.props.articles});
        }
    }
    
    render() {
    let articles = this.state.articles;
    let isLoading = this.props.isLoading;

    return (
    <View style={{ flex: 1, fledDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {!isLoading && articles && articles.length > 0 ? <FlatList 
        data={articles}
        renderItem={({ item }) => <ArticleTile article={item} />}
        /> : <Text>Loading articles...</Text>}
    </View>
    );
    }
  }


const mapStateToProps = (state)=> {
    return {
      articles: state.articles.articles,
      isLoading: state.articles.isLoading,
      error: state.articles.error
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