import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/actions';
import ArticleTile from './ArticleTile';
import { Icon } from 'react-native-elements'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'NY TIMES MOST POPULAR',
    headerStyle: {
      backgroundColor: '#00dbb7',
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
      alingContent: 'center',
      padding: 5
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginLeft: 5,
      marginRight: 20,
      padding: 5,
      minWidth: 230,
      justifyContent: 'flex-start'
    },
    headerLeft: (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 5, maxWidth: 50}}>
        <Icon
          name='bars' 
          size={20} 
          type='font-awesome'
          color='#fff' />
      </View>
    ),
    headerRight: (
      <View style={{ marginLeft: 5, flexDirection: 'row', justifyContent: 'space-between', padding: 5, minWidth: 50}}>
        <Icon
          name='search' 
          size={20} 
          type='font-awesome'
          color='#fff' />
        <Icon 
          name='ellipsis-v' 
          size={20} 
          type='font-awesome'
          color='#fff' />
      </View>
    ),
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