import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/actions';
import ArticleTile from './ArticleTile';
import { headerConfiguration } from './Header';
import Loader from './Loader';
import SideMenu from 'react-native-side-menu';
import FiltersMenu from './FiltersMenu';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
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
      if(prevProps.articles !== this.props.articles || prevProps.articles.length !== this.props.articles.length) {
        this.setState({articles: this.props.articles});
      }
      
      if(prevProps.error !== this.props.error) {
        this.setState({error: this.props.error});
      }
      
      if( this.props.filters && (prevProps.filters.category !== this.props.filters.category 
        || prevProps.filters.days !== this.props.filters.days) ) {
        this.props.getArticles(this.props.filters.days, this.props.filters.category);
      }
  }

  onPressHandler(article) {
    return this.props.navigation.navigate('Details', { url: article.url });
  }
    
  render() {
    let articles = this.state.articles;
    let isLoading = this.state.isLoading;
    let error = this.state.error;
    const menu = <FiltersMenu />
    return (
      <SideMenu menu={menu} isOpen={this.props.showFilters}>
        <View style={{ flex: 1, fledDirection: 'column', backgroundColor: '#ededed', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {!isLoading && articles && articles.length > 0 ? <FlatList 
            data={articles}
            renderItem={({ item }) => <TouchableOpacity onPress={this.onPressHandler.bind(this, item)}>
              <ArticleTile article={item} />
            </TouchableOpacity>}
            /> : error || articles.length === 0 ? <Text>'No data were found.</Text> : <Loader /> }
        </View>
      </SideMenu>
    );
    }
  }

const mapStateToProps = (state)=> {
    return {
        articles: state.articles.articles,
        isLoading: state.articles.isLoading,
        error: state.articles.error,
        showFilters: state.uiElementsState.showFilters,
        filters: state.articles.filters
      }
  }
  
  const mapDispatchToProps = dispatch => {

    return {
      getArticles: (days, category) => {
        dispatch(fetchArticles(days, category))
      }
    }
  }
  
 
  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
