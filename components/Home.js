import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/actions';
import ArticleTile from './ArticleTile';
import { headerConfiguration } from './Header';
import Loader from './Loader';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigation, navigationOptions);
    return headerConfiguration(navigation);
  };
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

  onPressHandler(article) {
    return this.props.navigation.navigate('Details', { url: article.url });
  }
    
  render() {
    let articles = this.state.articles;
    let isLoading = this.state.isLoading;
    let error = this.state.error;

    return (
      <View style={{ flex: 1, fledDirection: 'column', backgroundColor: '#ededed', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          {!isLoading && articles && articles.length > 0 ? <FlatList 
          data={articles}
          renderItem={({ item }) => <TouchableOpacity onPress={this.onPressHandler.bind(this, item)}>
            <ArticleTile article={item} />
          </TouchableOpacity>}
          /> : articles.length || error ? <Text>No Articles were found.</Text> : <Loader /> }
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